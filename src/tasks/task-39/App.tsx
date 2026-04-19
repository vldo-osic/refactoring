import { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
	const [started, setStarted] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	const intervalId = useRef();

	const stopHandler = () => {
		setCurrentTime(0);
		setStarted(false);
		clearInterval(intervalId.current);
		intervalId.current = null;
	};

	const startHandler = () => {
		if (started) {
			clearInterval(intervalId.current);
			intervalId.current = null;
		} else {
			intervalId.current = setInterval(() => {
				setCurrentTime((prev) => prev + 1);
			}, 1000);
		}
		setStarted(started);
	};

	useEffect(() => {
		if (currentTime % 5 == 0 && currentTime != 0) {
			document.querySelector('.timer').classList.add('pulsate');
		}
	});

	return (
		<main className="main">
			<div>
				<button onClick={startHandler}>
					{started ? 'Pause' : 'Start'}
				</button>
				<button onClick={stopHandler}>Stop</button>
				<div className="timer">{currentTime}</div>
			</div>
		</main>
	);
}
