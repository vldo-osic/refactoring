// App.jsx

import { useState, useEffect } from 'react';
import { useInfiniteScroll } from './hooks';

const App = () => {
  const [page, setPage] = useState(1);

  const fetchData = async (pageNumber) => {
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

  const [items, isLoading, error] = useInfiniteScroll(fetchData, page, 10);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
      {isLoading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error.message}</p>}
    </div>
  );
};

export default App;


// hooks.js
import { useState, useRef, useEffect } from 'react';

const useInfiniteScroll = (fetchMoreItems, items, threshold = 5) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const observer = useRef(null);

  const lastItemElement = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !loading) {
          loadMoreItems();
        }
      });
    }, options);

    if (lastItemElement.current) {
      observer.current.observe(lastItemElement.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [items, loading]);

  const loadMoreItems = async () => {
    setLoading(true);
    try {
      const newItems = await fetchMoreItems(items.length / threshold + 1); // Fetch next page of items
      setItems(prevItems => [...prevItems, ...newItems]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return [items, loading, error];
};

export default useInfiniteScroll;