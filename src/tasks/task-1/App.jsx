import bigComputations from 'bigComputations';
import sendData from 'data';
import sendMetric from 'metrics';
import { useCallback, useEffect, useMemo } from 'react';

const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

export const PleaseRevienMe = (props) => {
	const data = useMemo(
		() => bigComputations(props.argument),
		[props.argument],
	);

	useEffect(() => {
		const handleClick = () => {
			sendMetric('click');
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	const handleSubmit = useCallback(
		(id) => {
			sendData(data, id);
		},
		[data],
	);

	return (
		<ul>
			{items.map(({ id }) => (
				<li key={String(id)}>
					<button onClick={() => handleSubmit(item.id)} type="submit">
						{id}
					</button>
				</li>
			))}
		</ul>
	);
};
