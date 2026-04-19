const outerComponent = ({ options, dataForClick, onComponentClick }) => {
	const makeClickHandler = (dataForClick) => {
		return () => onComponentClick(dataForClick);
	};

	const enhanceOptions = () => {
		const uppercased = {};
		Object.keys(options).forEach((key) => {
			uppercased[key] = options[key].toUpperCase();
		});
		return uppercased;
	};

	return (
		<MemoComponent
			onClick={makeClickHandler(dataForClick)}
			options={enhanceOptions()}
		>
			<div>
				This is <b>Memo Component!</b>
			</div>
		</MemoComponent>
	);
};
