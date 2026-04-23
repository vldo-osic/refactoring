import {
	createContext,
	type FC,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

const AppStateContext = createContext<{
	count: number;
	now: Date;
} | null>(null);

const IncContext = createContext<{
	increment: () => void;
} | null>(null);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [count, setCount] = useState(0);
	const [now, setNow] = useState(() => new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const increment = useCallback(() => {
		setCount((prev) => prev + 1);
	}, []);

	const stateValue = useMemo(() => ({ count, now }), [count, now]);
	const incValue = useMemo(() => ({ increment }), [increment]);

	return (
		<AppStateContext.Provider value={stateValue}>
			<IncContext.Provider value={incValue}>
				{children}
			</IncContext.Provider>
		</AppStateContext.Provider>
	);
};

export const useCount = () => {
    const state = useContext(AppStateContext);
    return { count: state?.count };
}

export const useNow = () => {
    const state = useContext(AppStateContext);
    return { now: state?.now };
}

export const useIncrement = () => {
    const state = useContext(IncContext);
    return { increment: state?.increment };
}