import { useEffect, useState } from 'react';

const INIT_COUNT = 0;
const MAX_COUNT = 4;

const log = (logCount) => {
	console.log(`Count updated: ${logCount}`);
};

const Counter = () => {
	const [count, setCount] = useState(INIT_COUNT);

	useEffect(() => {
		log(count);
	}, [count]);

	const increment = () => {
		setCount((prev) => prev === MAX_COUNT ? 0 : prev + 1);
	};

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={increment}>inc</button>
		</div>
	);
};

export default Counter;
