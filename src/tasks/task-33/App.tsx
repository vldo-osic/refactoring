import { useEffect, useRef, useState } from 'react';

const ToggleComponent = () => {
	const [isVisible, setIsVisible] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isVisible && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isVisible]);

	const toggleVisibility = () => {
		setIsVisible((prev) => !prev);
	};

	return (
		<>
			<button onClick={toggleVisibility}>Toggle Input</button>
			{isVisible ? <input ref={inputRef} /> : null}
		</>
	);
};

export default ToggleComponent;
