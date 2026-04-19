import { useState } from "react";

const heavyFunc = (count) => {
	return Math.floor(Math.random() * count);
};

const LazyInit = (props) => {
	const [count, setCount] = useState(() => heavyFunc(props?.count ?? 0));

	const increment = () => {
		setCount(prev => prev + 1)
	}

	return (
		<>
			{count}
			<button onClick={increment}>
				Increment
			</button>
		</>
	);
};

export default LazyInit
