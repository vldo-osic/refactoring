import { useCallback, useState } from 'react';

export default function App() {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState({
		name: 'Anton',
	});

	const handleBtnClick2 = () => {
		setCount2({ name: 'Alex' });
	};

	const btnClick = () => {
		setCount((prev) => prev + 1);
	};

	const handleBtnClick = useCallback(() => {
		btnClick();
	}, []);

	return (
		<div>
			<button onClick={handleBtnClick}>{count}</button>
			<button onClick={handleBtnClick2}>{count2.name}</button>
			<div />
			<input type="text" />
		</div>
	);
}
