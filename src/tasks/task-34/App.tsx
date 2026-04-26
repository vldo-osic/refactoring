import { useState, useEffect } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCount(prev => {
				const next = prev + 1;
				console.log(next)
				
				return next;
			});
		}, 1000);

		return () => {
			clearInterval(timer);
		}
	}, []);

	return <div>Count: {count}</div>;
};

export default Counter;
