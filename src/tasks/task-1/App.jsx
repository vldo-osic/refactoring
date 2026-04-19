import React from "react";
import sendMetric from "metrics";
import sendData from "data";
import bigComputations from "bigComputations";

const pleaseRevienMe = (props) => {
	const [data, setDate] = React.useState(bigComputations(props.argument));

	const [items] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

	React.useLayoutEffect(() => {
		document.addEventListener("click", () => {
			sendMetric("click");
		});
	});

	const click = React.useCallback((id) => {
		sendData(data, id);
	});

	return (
		<React.Fragment>
			{items.map((item) => (
				<div onClick={() => click(item.id)}>{item.id}</div>
			))}
		</React.Fragment>
	);
};

export pleaseRevienMe;