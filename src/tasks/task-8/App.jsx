function WindowEvent({
	event,
	handler,
	options,
}: {
	event: string;
	handler: EventListener;
	options?: EventListenerOptions;
}) {
	useEffect(() => {
		console.log('useEffect');
		window.addEventListener(event, handler, options);

		return () => {
			window.removeEventListener(event, handler, options);
		};
	}, [event, handler, options]);

	return null;
}

export default function App() {
	const [isVisible, setIsVisible] = useState(false);
	const onclick = useCallback(() => {
		setIsVisible((prev) => !prev);
	}, []);

	return (
		<>
			<Button onClick={onClick} />
			<WindowEvent event="click" handler={() => console.log('click')} />
			{isVisible && <div>lorem ipsum</div>}
		</>
	);
}
