// Item.tsx

import React from 'react';
import './styles.css';

type Props = {
	onAdd: () => void;
};

export default function Item(props: Props) {
	return (
		<div className="block">
			<button className="btn" onClick={props.onAdd}>
				Add to cart
			</button>
		</div>
	);
}
