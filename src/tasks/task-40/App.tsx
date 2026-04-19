import './styles.css';
import { List } from './list';

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

export default function App() {
	return (
		<div className="App">
			<span>
				По кнопке "покупать" случайную машину и помещать ее в гараж
			</span>
			<div>Автосалон: {cars.join(', ')}</div>
			<button>Купить машину</button>
			<List items={listData} />
		</div>
	);
}
