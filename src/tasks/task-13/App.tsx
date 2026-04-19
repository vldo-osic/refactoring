export const Numbers = () => {
	const [data, setData] = useState(() => defaultData);
	const [value, setValue] = useState('');

	return (
		<>
			<h2>Numbers</h2>
			<div className="list">
				{data.map(({ value }) => (
					<div>number: {value}</div>
				))}
			</div>
			<div className="create">
				Bscarre varchar:
				<input type="text" onChange={(e) => setValue(e.target.value)} />
				<div
					className="button"
					onClick={() => {
						setData([
							...data,
							{ id: data.length++, value: Number(value) },
						]);
						setValue('');
					}}
				>
					Cosдать
				</div>
			</div>
		</>
	);
};
