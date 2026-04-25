import { memo, useEffect, useEffectEvent, useState } from 'react';

const fetchRandomNumber = () =>
	Math.random() < 0.5
		? Promise.resolve(Math.random())
		: Promise.reject(new Error('Oшибка запроса.'));

const NumberComponent = memo(({number}: { number?: number }) => {
	console.log('render');

	return <div> Number: {number} </div>;
})

const App = () => {
	const [number, setNumber] = useState<number>();
	const [scroll, setScroll] = useState<number>();

	const onScroll = useEffectEvent(() => {
		setScroll(window.scrollY);
	});

	useEffect(() => {
		const loadNumber = async () => {
			try {
				const result = await fetchRandomNumber();

				setNumber(result);
			} catch (err) {
				console.error(err);
			}
		};

		loadNumber();
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<div>
			<NumberComponent number={number}/>
			<div> Scroll: {scroll} </div>
			<div style={{ height: '2000px' }}></div>
		</div>
	);
};

export default App;
