import { useState, memo } from 'react';

const CountDisplay = memo(({count}: { count: number }) => {
	return <div>{count}</div>;
});

const App = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div>
			<button onClick={increment}>
				<span>⚛️</span> {count}
			</button>
			<CountDisplay count={count} />
		</div>
	);
};

export default App;
