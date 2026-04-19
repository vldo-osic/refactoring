import { useState } from "react";

const defaultData = [
	{ id: '1', value: 1 },
	{ id: '2', value: 2 },
	{ id: '3', value: 3 },
]

const Numbers = () => {
	const [data, setData] = useState(() => defaultData);
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		setData(prev => ([
			...prev,
			{ id: crypto.randomUUID(), value: Number(value) },
		]));
		setValue('');
	}

	return (
		<>
			<h2>Numbers</h2>
			<ul className="list">
				{data.map(({ value, id }) => (
					<li key={id}>
						<h3>number: {value}</h3>
					</li>
				))}
			</ul>
			<form className="create">
				Bscarre varchar:
				<label>
					<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
				</label>
				<button
					type="submit"
					className="button"
					onClick={handleSubmit}
				>
					Cosдать
				</button>
			</form>
		</>
	);
};

export default Numbers
