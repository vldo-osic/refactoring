const ListItem = (props) => {
	const { name, onChange } = props;
	return (
		<li>
			<input type="checkbox" onChange={onChange} name={name} />
			{name}
		</li>
	);
};

export default function List() {
	const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

	useEffect(() => {
		document.addEventListener('dblclick', () => {
			console.log('dblclicked');
		});
	}, []);

	const handleChange = (e) => {
		if (selectedCheckboxes.includes(e.target.name)) {
			setSelectedCheckboxes(
				selectedCheckboxes.filter((el) => el !== e.target.name),
			);
		} else {
			setSelectedCheckboxes([...selectedCheckboxes, e.target.name]);
		}
	};

	const towns = [
		{ name: 'Moscow' },
		{ name: 'St. Petersburg' },
		{ name: 'London' },
	];

	const marks = [{ name: 'Toyota' }, { name: 'Haval' }, { name: 'Nissan' }];

	return (
		<div>
			<ul>
				Посещенные Вами города:{' '}
				{towns.map((el) => (
					<ListItem onChange={handleChange} name={el.name} />
				))}
			</ul>
			<ul>
				Желаемые Вами марки машин:{' '}
				{marks.map((el) => (
					<ListItem onChange={handleChange} name={el.name} />
				))}
			</ul>
		</div>
	);
}
