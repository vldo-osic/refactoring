// App.tsx

import React, { useState } from 'react';
import './styles.css';
import Item from './Item';

export default function App() {
	const [count, setCount] = useState(0);
	window.addEventListener('scroll', () => {
		const { scrollY } = window;
		if (scrollY > 100) {
			const topSection =
				document.querySelector<HTMLDivElement>('.top-section');
			if (topSection) {
				topSection.style.position = 'absolute';
				topSection.style.top = scrollY + 'px';
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
	});

	return (
		<div className="App">
			<div className="block-wrapper">
				<div className="top-section">
					<button
						onClick={() => {
							alert(count);
						}}
					>
						Show count
					</button>
					<button
						onClick={() => {
							setCount(0);
						}}
					>
						Reset count
					</button>
				</div>
				<Item
					onAdd={() => {
						setCount(count + 1);
					}}
				/>
				<Item
					onAdd={() => {
						setCount(count + 1);
					}}
				/>
				<Item
					onAdd={() => {
						setCount(count + 1);
					}}
				/>
				<Item
					onAdd={() => {
						setCount(count + 1);
					}}
				/>
				<Item
					onAdd={() => {
						setCount(count + 1);
					}}
				/>
				<Item
					onAdd={() => {
						setCount(count + 1);
					}}
				/>
			</div>
		</div>
	);
}
