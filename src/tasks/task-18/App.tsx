import React, { useState, useEffect } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(`Count updated: ${count}`);
		if (count === 5) {
			setCount(0);
		}
	}, [count]);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>Count: {count}</p>
			<div></div>
		</div>
	);
};

export default Counter;
