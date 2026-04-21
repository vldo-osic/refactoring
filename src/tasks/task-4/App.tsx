// utils
const handleTopSectionScroll = () => {
	const { scrollY } = window;
	if (scrollY > 100) {
		const topSection =
			document.querySelector<HTMLDivElement>('.top-section');
		if (topSection) {
			topSection.style.position = 'absolute';
			topSection.style.top = `${scrollY}px`;
		} else {
			return;
		}
	} else {
		const topSection =
			document.querySelector<HTMLDivElement>('.top-section');
		if (topSection) {
			topSection.style.position = 'static';
		} else {
			return;
		}
	}
};

// App.tsx
import { useCallback, useEffect, useState } from 'react';
// import './styles.css';
import Item from './Item';

const ITEMS_COUNT = 6;

export default function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleTopSectionScroll);

		return () => {
			window.removeEventListener('scroll', handleTopSectionScroll);
		};
	});

	const handleReset = useCallback(() => {
		setCount(0);
	}, []);

	const handleIncrement = useCallback(() => {
		setCount((prev) => prev + 1);
	}, []);

	return (
		<div className="App">
			<div className="block-wrapper">
				<div className="top-section">
					<button
						onClick={() => {
							alert(count);
						}}
						type="button"
					>
						Show count
					</button>
					<button onClick={handleReset} type="reset">
						Reset count
					</button>
				</div>
				{Array.from({ length: ITEMS_COUNT }).map((_, i) => (
					<Item key={String(i)} onAdd={handleIncrement} />
				))}
			</div>
		</div>
	);
}
