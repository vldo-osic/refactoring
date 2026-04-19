import { useRef, useState } from 'react';

export default function App() {
	const [isVisible, setIsVisible] = useState(false);
	const inputRef = useRef();

	const toggleInput = () => {
		setIsVisible(true);
		inputRef.current.focus();
	};

	return (
		<div>
			<button onClick={toggleInput}>Show and focus input</button>
			{isVisible && <input ref={inputRef} type="text" />}
		</div>
	);
}
