import React from 'react';
import { useState } from 'react';

export const App = () => {
	const [someNumber] = useState(9);
	const [text, setText] = useState('');

	const heavyCalculation = () => {
		console.log('heavyCalculation');
		return someNumber + Date.now();
	};

	const onSend = () => {
		console.log('send text = ', text);
	};

	return (
		<div>
			<TextField text={text} setText={setText} />
			<HeavySendButton onClick={onSend} />

			<pre>{heavyCalculation()}</pre>

			<button onClick={onSend}>Кнопка отправки 2</button>
		</div>
	);
};

const HeavySendButton = ({ onClick }) => {
	console.log('SendButton render');
	return <button onClick={onClick}>Кнопка отправки 1</button>;
};

const TextField = ({ text, setText }) => {
	return (
		<input value={text} onChange={(event) => setText(event.target.value)} />
	);
};
