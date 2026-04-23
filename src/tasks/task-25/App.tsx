import { useEffect, useRef, useState } from 'react';

export default function App() {
	const [isVisible, setIsVisible] = useState(false);
	const inputRef = useRef(null);

	const toggleInput = () => {
		setIsVisible((prev) => !prev);
	};

	useEffect(() => {
		if (isVisible) {
			inputRef?.current?.focus();
		}
	}, [isVisible])

	return (
		<div>
			<button onClick={toggleInput}>Show and focus input</button>
			{isVisible ? (
				<label>
					<input ref={inputRef} type="text" />
				</label>
			) : null}
		</div>
	);
}
