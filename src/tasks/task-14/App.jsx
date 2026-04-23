import { memo, useCallback, useState } from 'react';

const ParentElement = () => {
	const [count, setCount] = useState(0);
	const increment = useCallback(() => setCount((prev) => prev + 1), []);

	return (
		<>
			Parent: {count} <br />
			<SubElement clicker={increment} count={count} />
		</>
	);
};

const SubElement = memo(({ clicker, count }) => {
	return (
		<>
			Sub: {count} <br />
			<button onClick={clicker}>Increment</button>
		</>
	);
}, (prev, next) => prev.count === next.count - 1 );

export default ParentElement