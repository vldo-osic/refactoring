const heavyFunc = (count) => {
	return Math.floor(Math.random() * count);
};

const LazyInit = (props) => {
	const [count, setCount] = useState(heavyFunc(props.count));
	return (
		<>
			{count}
			<button onClick={() => setCount((prevProps) => ++prevProps)}>
				Increment
			</button>
		</>
	);
};
