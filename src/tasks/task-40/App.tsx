// import './styles.css';
import { memo, useState } from 'react';

const listData = [{ label: 'Mercedes' }];

const cars = [
	'Audi',
	'Toyota',
	'Lexus',
	'Volkswagen',
	'Porsche',
	'Nissan',
	'Hyundai',
	'KIA',
	'Chevrolet',
	'Ford',
	'Renault',
	'Mazda',
	'Suzuki',
];

const getLabels = (arr: typeof listData) => arr.map(({ label }) => label).join(',')

const List = memo(
	({ items }: { items: typeof listData }) => <div>Гараж: {getLabels(items)}</div>,
	(prev, next) => getLabels(prev.items) === getLabels(next.items),
);

export default function App() {
	const [showroomItems, setShowroomItems] = useState(() => cars);
	const [garageItems, setGarageItems] = useState(() => listData);

	const handleClick = () => {
		if (!showroomItems.length) {
			return;
		}

		const index = Math.floor(Math.random() * showroomItems.length);

		setShowroomItems((prev) => {
			console.log(index, prev[index])
			return prev.filter((_, i) => i !== index);
		});
		setGarageItems((prev) => {
			return [...prev, { label: showroomItems[index] }];
		});
	};

	return (
		<div className="App">
			<span>По кнопке "покупать" случайную машину и помещать ее в гараж</span>
			<div>Автосалон: {showroomItems.join(', ')}</div>
			<button onClick={handleClick}>Купить машину</button>
			<List items={garageItems} />
		</div>
	);
}
