import { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
	const [isTimerOn, setIsTimerOn] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	const intervalId = useRef<number | null>(null);

	const stopTimer = () => {
		if (intervalId.current) {
			setIsTimerOn(false);
			clearInterval(intervalId.current);
			intervalId.current = null;
		}
	}

	const resetTimer = () => {
		setCurrentTime(0);
		stopTimer();
	};

	const toggleTimer = () => {
		if (isTimerOn) {
			stopTimer()
		} else {
			setIsTimerOn(true);
			intervalId.current = setInterval(() => {
				setCurrentTime((prev) => prev + 1);
			}, 1000);
		}
	};

	useEffect(() => {
		if (currentTime % 5 === 0 && currentTime !== 0) {
			document.querySelector('.timer')?.classList.add('pulsate');
		} else {
			document.querySelector('.timer')?.classList.remove('pulsate');
		}
	}, [currentTime]);

	return (
		<main className="main">
			<div>
				<button onClick={toggleTimer}>
					{isTimerOn ? 'Pause' : 'Start'}
				</button>
				<button onClick={resetTimer}>Stop</button>
				<div className="timer">{currentTime}</div>
			</div>
		</main>
	);
}
