import { useState } from "react";

export default function CounterApp() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(prev => prev + 1);
	};

	return (
		<div className="App">
			<p>'Чтo произойдет при клике по кнопке</p>
			<h1>Count = {count}</h1>
			<button onClick={increment}>кнопка</button>
		</div>
	);
}
