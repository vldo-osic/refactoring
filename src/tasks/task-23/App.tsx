import React, { useState } from 'react';

export default () => <div>Clicker</div>;

const heavyFunc = (count) => {
	// hard calculations
	// 10sec
};

const LazyInit = (props) => {
	const [count, setCount] = useState(heavyFunc(props.count));
	return (
		<>
			{count}
			<button onClick={() => setCount((prevProps) => ++prevProps)}>
				Increment
			</button>
		</>
	);
};
