import React, { useState, useEffect } from 'react';

function randomInteger(min, max) {
	const rand = min + Math.random() * (max - min);
	return Math.round(rand);
}

// имитация запроса к серверу. просто получаем число асинхронно
const randomNumber = () => Promise.resolve(randomInteger(9000, 11000));

const testData = [];

export const randomList = () => {
	const [number, setNumber] = useState(0);
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			setNumber(await randomNumber());
			window.addEventListener('scroll', () => setScroll(window.scrollY));
			for (let i = 0; i < number; i++) {
				testData.push(randomInteger(0, 20));
			}
		};

		fetchData();

		return () => {
			window.removeEventListener('scroll', () =>
				setScroll(window.scrollY),
			);
		};
	}, []);

	return (
		<div>
			<div>Количество справочников: {number}</div>
			<div>Scroll: {scroll}</div>
			<div>Список полученных значений</div>
			<div style={{ height: 400, overflowY: 'hidden' }}>
				{testData.map((el, index) => (
					<div key={index}>
						<div>Справочник {index}</div>
						<div>{el}</div>
					</div>
				))}
			</div>
		</div>
	);
};
