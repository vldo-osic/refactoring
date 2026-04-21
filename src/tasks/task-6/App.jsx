import { useState } from "react";

const ZERO = 0;
const NUMBERS = [1, 23, 4, 6, 21, 3]

const List = () => (
	<ul>
		{NUMBERS.map((num, index) => (
			<li key={String(index)}>{num}</li>
		))}
	</ul>
)

export default function App() {
	const [count, setCount] = useState(ZERO);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment} type="button">
				Increment
			</button>
			<List />
		</div>
	);
}
