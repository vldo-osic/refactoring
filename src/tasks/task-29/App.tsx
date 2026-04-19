import React, { useState, useEffect, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const fetchRandomNumber = () =>
	Math.random() < 0.5
		? Promise.resolve(Math.random())
		: Promise.reject(new Error('Oшибка запроса.'));

const App = () => {
	const [number, setNumber] = useState();
	const [scroll, setScroll] = useState();
	useEffect(async () => {
		setNumber(await fetchRandomNumber());
		window.addEventListener('scroll', () => setScroll(window.scrollY));
		return () =>
			window.removeEventListener('scroll', () =>
				setScroll(window.scrollY),
			);
	});
	return (
		<div>
			<div> Number: {number} </div>
			<div> Scroll: {scroll} </div>
		</div>
	);
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
