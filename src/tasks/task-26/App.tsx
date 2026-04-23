import { memo, useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

// import './style.css';

const PRODUCTS_ENDPOINT = 'https://my-json-server.typicode.com/cyberwalrus/demo/products';
const SHOPS_ENDPOINT = 'https://my-json-server.typicode.com/cyberwalrus/demo/shops';

const CURRENCY = ' $';

interface IProduct {
	description: string;
	id: string;
	info: string;
	name: string;
}

type IShop = {
	coordinate: number[];
	id: string;
	name: string;
	priceList: Record<string, string>;
};

const START_TIME = 10;

const App = () => {
	const { data: products, error: productsError } = useFetch<IProduct[]>(PRODUCTS_ENDPOINT, []);
	const { data: shops, error: shopsError } = useFetch<IShop[]>(SHOPS_ENDPOINT, []);

	if (productsError || shopsError) {
		console.log(productsError, shopsError);
		return <Timer />;
	}

	return (
		<div>
			<Timer />
			<ProductList products={products} shops={shops} />
		</div>
	);
};

const Timer = () => {
	const [time, setTime] = useState(START_TIME);

	useEffect(() => {
		const timerId = setInterval(() => {
			setTime((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timerId);
	}, []);

	if (time <= 0) {
		return null;
	}

	return <p className="Controls">{time}</p>;
};

const getShops = (id: string, shops: IShop[]) => {
	return shops.filter(({ priceList }) => Object.hasOwn(priceList, id));
};

interface IProductListProps {
	products: IProduct[];
	shops: IShop[];
}

const ProductList = memo(
	({ products, shops }: IProductListProps) => {
		return (
			<div className="productsWrapper">
				{products.map(({ name, description, id }) => (
					<main key={id} className="products">
						<h3 className="products-Item_green">{name}</h3>
						<h4>{description}</h4>

						<hr />

						<ul className="postList">
							{getShops(id, shops).map(({ name, priceList }) => (
								<div key={name} className="post__header">
									<span>
										{name} -{' '}
										{
											Object.entries(priceList).find(
												([key, _]) => id === key,
											)?.[1]
										}
										{CURRENCY}
									</span>
								</div>
							))}
						</ul>
					</main>
				))}
			</div>
		);
	},
	(prev, next) => JSON.stringify(prev) === JSON.stringify(next),
);

export default App;
