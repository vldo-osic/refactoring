import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from './store';
import { ClientType, fetchItems, selectItems } from './store/itemsSlice';

function Component() {
	const dispatch = useDispatch<AppDispatch>();
	const items = useSelector(selectItems);

	useEffect(() => {
		dispatch(fetchItems());
	}, [dispatch]);

	return (
		<ul>
			{items.map(({ id, name, type }) => (
				<li key={id}>
					<div className={`item item_type_${type}`}>
						{type === ClientType.person ? (
							<span>{name}</span>
						) : (
							<span>Компания {id}</span>
						)}
						<button
							onClick={() => {
								console.log(id);
							}}
						>
							choose
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default Component;
