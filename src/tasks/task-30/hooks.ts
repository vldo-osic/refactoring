import { useCallback, useEffect, useRef, useState } from 'react';

interface Item {
	id: string;
	title: string;
}

const fetchData = async (pageNumber: number): Promise<Item[]> => {
	try {
		const response = await fetch(`https://api.example.com/data?page=${pageNumber}`);
		if (!response.ok) throw new Error('Network error');
		const json = await response.json();
		return json.data;
	} catch (err) {
		console.error(err);
		throw err;
	}
};

const useInfiniteScroll = (initPage: number) => {
    const [items, setItems] = useState<Item[]>([])
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

    const [page, setPage] = useState(initPage);
    const [hasMore, setHasMore] = useState(true);

	const lastItemRef = useRef<HTMLDivElement>(null);

    const loadMoreItems = useCallback(async () => {
        if (loading || !hasMore) {
            return;
        };

		setLoading(true);
		try {
			const newItems = await fetchData(page); // Fetch next page of items

            if (newItems.length === 0) {
                setHasMore(false)
            } else {
                setItems((prev) => [...prev, ...newItems]);
                setPage((prev) => prev + 1);
            }
		} catch (err) {
			setError(new Error(String(err)));
		} finally {
			setLoading(false);
		}
	}, [hasMore, loading, page]);

	useEffect(() => {
        if (!lastItemRef.current) {
            return;
        }

		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 1.0,
		};

		const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading && hasMore) {
                loadMoreItems();
            };
		}, options);

		observer.observe(lastItemRef.current);

		return () => {
			observer.disconnect();
		};
	}, [loading, hasMore, loadMoreItems]);

	return [items, loading, error, lastItemRef] as const;
};

export default useInfiniteScroll;
