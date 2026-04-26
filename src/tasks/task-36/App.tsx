import { type FC, memo, useEffect, useMemo, useState } from 'react';

const data = {
	name: '54',
	age: 21,
	info: 22,
};

const MainFc: FC<typeof data> = memo(({ name, ...rest }) => {
	const [state, setState] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setState((prev) => prev + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		// .... какие-то сложные вычисления
	}, [rest.age, rest.info]);

	return <div>{state}</div>;
});

const App = () => {
	const memoizedData = useMemo(() => data, []);
	return <MainFc {...memoizedData} />;
};

export default App;
