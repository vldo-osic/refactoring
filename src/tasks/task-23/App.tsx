import { useMemo, useState } from 'react';

export default () => <div>Clicker</div>;

const heavyFunc = (count) => {
	// hard calculations
	// 10sec
};

const LazyInit = (props) => {
	const initCount = useMemo(() => heavyFunc(props.count), [props.count])
	const [count, setCount] = useState(initCount);

	const increment = () => {
		setCount(prev => prev + 1);
	};

	return (
		<>
			<p>{count}</p>
			<button onClick={increment}>
				Increment
			</button>
		</>
	);
};
