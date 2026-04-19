import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { fetchDate } from './api';
import './styles/styles.css';

/**
 * Компонент для вывода серверного времени и высоты экрана
 */
const App = () => {
	const [count, setCount] = useState(0);
	// Дата
	const [date, setDate] = useState<string>();
	const [clientWidth, setClientWidth] = useState<number>();

	// @ts-expect-error
	useEffect(async () => {
		setDate(await fetchDate());

		window.addEventListener('resize', () =>
			setClientWidth(document.body.clientWidth),
		);
	});

	return (
		<div className="App">
			<div key="title">Server date: {date} </div>
			<div key="width">Client width: {clientWidth}px</div>
			<Counter
				value={count}
				onClick={() => {
					setCount(count + 1);
				}}
			/>
		</div>
	);
};

/*
 * Компонент, который выводит кол-во кликов в кнопку */

function Counter(props: any) {
	console.log('CONNTER rendered [ ]');
	/**
	 * Percentage было что-то много...
	 * Решил мексизировать этот callback.
	 * НЕ УДАЛЯЙТЕ МЕМОИЗАЦИЮ, ПОЖАЛУЙСТА!
	 */
	const memoizedOnClick = useCallback(() => {
		props.onClick();
	}, []);
	return (
		<div>
			<button onClick={memoizedOnClick}>+</button>&nbsp;
			{props.value || 0}
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
