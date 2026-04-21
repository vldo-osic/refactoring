import type { SomeDTO } from './App';

const Item = ({item}: { item: SomeDTO }) => {
	return <span>{item.id}</span>;
};

export default Item;
