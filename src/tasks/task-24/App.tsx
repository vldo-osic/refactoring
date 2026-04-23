import { useState, useEffect, useEffectEvent, useCallback, memo } from 'react';
import ReactDOM from 'react-dom';
// import { fetchDate } from './api';
//import './styles/styles.css';

const fetchDate = () => Promise.resolve(new Date());

/**
 * Компонент для вывода серверного времени и высоты экрана
 */
const App = () => {
	const [count, setCount] = useState(0);
	// Дата
	const [date, setDate] = useState<Date>();
	const [clientWidth, setClientWidth] = useState<number>(document.body.clientWidth);

	useEffect(() => {
		const loadDate = async () => {
			try {
				const newDate = await fetchDate();
				setDate(newDate);
			} catch (err) {
				console.error(err);
			}
		}
		
		loadDate();
	}, [])
	
	const handleResize = useEffectEvent(() => {
		// можно еще debounce
		setClientWidth(document.body.clientWidth);
	});

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, []);

	const increment = useCallback(() => {
		setCount((prev) => prev + 1);
	}, [])

	return (
		<div className="App">
			<div key="title">Server date: {date?.getTime()} </div>
			<div key="width">Client width: {clientWidth}px</div>
			<Counter
				value={count}
				onClick={increment}
			/>
		</div>
	);
};

/*
 * Компонент, который выводит кол-во кликов в кнопку */

const Counter = memo(({ value, onClick }: { value: number, onClick: () => void }) => {
	console.log('CONNTER rendered [ ]');
	
	return (
		<div>
			<button onClick={onClick} type='button'>+</button>
			<p>{value ?? 0}</p>
		</div>
	);
})

export default App;
