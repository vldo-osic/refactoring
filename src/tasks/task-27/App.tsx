import { useEffect, useEffectEvent, useMemo, useState } from 'react';

function randomInteger(min: number, max: number) {
	const rand = min + Math.random() * (max - min);
	return Math.round(rand);
}

// имитация запроса к серверу. просто получаем число асинхронно
const randomNumber = () => Promise.resolve(randomInteger(9000, 11000));

const RandomList = () => {
	const [number, setNumber] = useState(0);
	const [scroll, setScroll] = useState(0);

	const testData = useMemo(() => {
		return Array.from({ length: number }).map(() => ({
			value: randomInteger(0, 20),
			id: crypto.randomUUID(),
		}));
	}, [number]);

	const handleScroll = useEffectEvent(() => {
		setScroll(window.screenY);
	});

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	useEffect(() => {
		const fetchData = async () => {
			setNumber(await randomNumber());
		};

		fetchData();
	}, []);

	return (
		<div>
			<div>Количество справочников: {number}</div>
			<div>Scroll: {scroll}</div>
			<div>Список полученных значений</div>
			<div style={{ height: 400, overflowY: 'hidden' }}>
				{testData.map(({ id, value }, index) => (
					<div key={id}>
						<div>Справочник {index}</div>
						<div>{value}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RandomList;
