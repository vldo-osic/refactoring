import { memo, useCallback, useState } from 'react';

const Button = memo(function Button({
	onClick,
}: {
	onClick: React.MouseEventHandler;
}) {
	console.log('render');
	return <button onClick={onClick}>Click me</button>;
});

export default function App() {
	const [isVisible, setIsVisible] = useState(false);

	const onClick = useCallback(() => {
		setIsVisible(!isVisible);
	}, []);

	return (
		<>
			<Button onClick={onClick} />
			{isVisible && <div>lorem ipsum</div>}
		</>
	);
}
