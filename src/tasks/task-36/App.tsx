import { useEffect, useState, type FC } from 'react';

const data = {
	name: '54',
	age: 21,
	info: 22,
};

const MainFc: FC<typeof data> = ({ name, ...rest }) => {
	const [state, setState] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setState((prev) => prev + 1);
		}, 1000);
	}, []);

	useEffect(() => {
		// .... какие-то сложные вычисления
	}, [rest]);

	return <div>{state}</div>;
};

export const App = () => <MainFc {...data} />;
