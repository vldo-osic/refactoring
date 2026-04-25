import { type FC, memo, useMemo } from 'react';
//import './styles.css';

import { AppProvider, useCount, useIncrement, useNow } from './use-app';

const fibonacci = (num: number): number => {
	return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
};
interface ComplexComponentProps {
	result: number;
}

const ComplexComponent: FC<ComplexComponentProps> = memo(({ result }) => {
	console.log('ComplexComponent render');
	const { increment } = useIncrement();
	return (
		<div>
			<p>result is: {result}</p>
			<button onClick={increment} type='button'>increase count</button>
		</div>
	);
});

const Clock = memo(() => {
	console.log('Clock render');
	const { now } = useNow();
	return (
		<h1>
			{new Intl.DateTimeFormat('ru-RU', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			}).format(now)}
		</h1>
	);
});

const Count = memo(() => {
	console.log('Count render');
	const { count } = useCount();
	return <div>You clicked {count} times</div>;
});

const OtherComponent = memo(() => {
	console.log('OtherComponent');
	return <div>OtherComponent</div>;
});

const FIBONACCI_NUM = 38;

export default function App() {
	const fibResult = useMemo(() => fibonacci(FIBONACCI_NUM), []);

	return (
		<AppProvider>
			<h1>Improve perf & reduce rendres count</h1>
			<p>
				Using current tech stack, improve performance using various
				react optimizations techniques
			</p>
			<hr style={{ marginBottom: 24 }} />
			<ComplexComponent result={fibResult} />
			<Clock />
			<hr style={{ marginBottom: 24 }} />
			<ComplexComponent result={fibResult} />
			<Clock />
			<Count />
			<OtherComponent />
		</AppProvider>
	);
}
