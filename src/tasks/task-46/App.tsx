const App = () => {
	const [count, setCount] = useState(0);
	const [date, setDate] = useState<string>();
	const [clientWidth, setClientWidth] = useState<number>();

	useEffect(async () => {
		setDate(await fetchDate());

		window.addEventListener('resize', () => {
			setClientWidth(document.body.clientWidth);
		});
	}, []);

	return (
		<div className="App">
			<div key="title">Server date: {date}</div>
			<div key="width">Client width: {clientWidth}px</div>
			<Counter value={count} onClick={() => setCount(count + 1)} />
		</div>
	);
};

function Counter(props: any) {
	console.log('COUNTER rendered');

	const memoizedOnClick = useCallback(() => {
		props.onClick();
	}, []);

	return (
		<div>
			<button onClick={memoizedOnClick}>+&nbsp;</button>
			{props.value || 0}
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
