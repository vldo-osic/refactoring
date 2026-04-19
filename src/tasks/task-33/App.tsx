import React, { useState, useRef } from 'react';

const ToggleComponent = () => {
	const [isVisible, setIsVisible] = useState(false);
	const inputRef = useRef(null);

	const toggleVisibility = () => {
		setIsVisible((prev) => !prev);
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<>
			<button onClick={toggleVisibility}>Toggle Input</button>
			{isVisible && <input ref={inputRef} />}
		</>
	);
};

export default ToggleComponent;
