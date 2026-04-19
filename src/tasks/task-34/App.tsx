import React, { useState, useEffect } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			console.log(count);
			setCount(count + 1);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return <div>Count: {count}</div>;
};

export default Counter;
