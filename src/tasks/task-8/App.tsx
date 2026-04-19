import { memo, type ReactNode, useCallback, useEffect, useState } from 'react';

const WindowEvent = memo(
	({
		event,
		handler,
		options,
	}: {
		event: string;
		handler: EventListener;
		options?: EventListenerOptions;
	}) => {
		useEffect(() => {
			console.log('useEffect');
			window.addEventListener(event, handler, options);

			return () => {
				window.removeEventListener(event, handler, options);
			};
		}, [event, handler, options]);

		return null;
	},
);

export default function App() {
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = useCallback(() => {
		setIsVisible((prev) => !prev);
	}, []);

	const logClick = useCallback(() => {
		console.log('click');
	}, []);

	return (
		<>
			<Button onClick={handleClick}>btn</Button>
			<WindowEvent event="click" handler={logClick} />
			{isVisible && <div>lorem ipsum</div>}
		</>
	);
}

const Button = memo(
	({ children, onClick }: { children?: ReactNode; onClick?: () => void }) => {
		return (
			<button onClick={onClick} type="button">
				{children}
			</button>
		);
	},
);
