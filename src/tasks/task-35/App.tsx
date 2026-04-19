import React, { useRef, useState, useEffect } from 'react';

const CountDisplay = (props) => {
	const [val] = useState(props.c);
	return <div>{val}</div>;
};

const App = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount((c) => c + 1);
	};

	return (
		<div>
			<button onClick={handleClick}>
				<span>⚛️</span> {count}
			</button>
			<CountDisplay c={count} />
		</div>
	);
};

export default App;
