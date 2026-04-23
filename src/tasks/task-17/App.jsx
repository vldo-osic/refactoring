import { useEffect, useEffectEvent, useRef, useState } from 'react';

const INIT_ITEMS = [{ id: 1 }];
const DELAY = 1000;

const PleaseReviewMe = () => {
	const [items, setItems] = useState(INIT_ITEMS);
	const intervalRef = useRef(null);

	const logCount = () => {
		console.log(items.length);
	};

	const onClick = useEffectEvent(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}

		intervalRef.current = setInterval(logCount, DELAY);
	});

	useEffect(() => {
		document.addEventListener('click', onClick);

		return () => {
			document.removeEventListener('click', onClick);

			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	const handleClick = () => {
		setItems((prev) => [...prev, { id: prev.length + 1 }]);
	};

	return (
		<>
			Current count: {items.length}
			<ul>
				{items.map(({ id }) => (
					<li key={String(id)}>{id}</li>
				))}
			</ul>
			<button onClick={handleClick} type="button">
				add once
			</button>
		</>
	);
};

export default PleaseReviewMe;
