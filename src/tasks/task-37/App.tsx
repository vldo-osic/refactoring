import { type ChangeEvent, memo, useCallback, useMemo, useRef, useState } from 'react';

const SOME_NUMBER = 9;
const heavyCalculation = () => {
	console.log('heavyCalculation');
	return SOME_NUMBER + Date.now();
};

const App = () => {
	const [_someNumber] = useState(9);
	const [text, setText] = useState('');

	const textRef = useRef(text);
	textRef.current = text;

	const heavyCalculationResult = useMemo(() => heavyCalculation(), []);

	const handleSend = useCallback(() => {
		console.log('send text = ', textRef.current);
	}, []);

	const handleSetText = useCallback((value: string) => {
		setText(value);
	}, []);

	return (
		<div>
			<TextField text={text} onSetText={handleSetText} />
			<HeavySendButton onClick={handleSend} />

			<pre>{heavyCalculationResult}</pre>

			<button onClick={handleSend}>Кнопка отправки 2</button>
		</div>
	);
};

const HeavySendButton = memo(({ onClick }: { onClick: () => void }) => {
	console.log('SendButton render');
	return <button onClick={onClick}>Кнопка отправки 1</button>;
});

const TextField = memo(
	({ text, onSetText }: { text: string; onSetText: (text: string) => void }) => {
		const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
			onSetText(event.target.value);
		};

		return (
			<label>
				<input value={text} onChange={handleChange} />
			</label>
		);
	},
);

export default App;
