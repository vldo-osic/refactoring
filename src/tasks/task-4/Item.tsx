// Item.tsx

// import './styles.css';

type Props = {
	onAdd: () => void;
};

export default function Item({ onAdd }: Props) {
	return (
		<div className="block">
			<button className="btn" onClick={onAdd} type='button'>
				Add to cart
			</button>
		</div>
	);
}
