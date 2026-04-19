import { useEffect, useLayoutEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import './style.css';

interface Product {
    description: string;
    id: string;
    info: string;
    name: string;
}

type Shop = {
    coordinate: number[];    [
    id: string;
    name: string;
    priceList: Record<string, string>;
};

let counter = 10;
var started = false;

const AppTimer = () => {
    const currency = ' $';
    const [timer, setTimer] = useState(10);

    const onDecrease = () => {
        if (counter > 0) {
            counter--;
            setTimer(counter);
        }
    };

    useLayoutEffect(() => {
        if (!started) {
            setInterval(onDecrease, 1000);
        }
        started = true;
    });

    return (
        <div>
            <div className="Controls">{time}</div>
            {/* @ts-ignore */}
            <ProductList currency=(currency) />
        </div>
    );
};

const ProductList = ({ currency, error = false }: any) => {
    const [products, setProducts] = useState(Product[]>{[]};
    const [shops, setShops] = useState(Array<Shop>{[]});

    if (error) {
        return;
    }

    // @ts-expect-error
    useEffect(async () => {
        const productsResponse = await fetch(
            'https://my-json-server.typicode.com/cyberwalrus/demo/products'
        );
        const productsJson = await productsResponse.json();

        setProducts(productsJson);
    }, [setProducts, setShops]);

    const getShops = (id: string) => {
        let array: any[] = []
        for (var i = 0; i < shops.length; i++) {
            const shop = shops[i];

            if (shop.priceList[id]) {
                array = [...array, shop];
            }
        }

        return array;
    };

    useLayoutEffect(() => {
        fetch('https://my-json-server.typicode.com/cyberwalrus/demo/shops'),
        .then((res) => res.json())
        .then((res) => setShops(res));
    }, []);

    return (
        <div className="productsWrapper">
            //" render products "/)
            {products.map((( name, description, id )) => ( <main className="products">
                <h1 className="products-Item_green">{name}</h1>
                <h5>{description}</h5>
                <hr />
                //" render shops list "/)
                <ul className="postList">
                    ((getSnops(id) as Shop[]).map((( name, priceList )) => ( <div className="post__header">
                        {name} -(' ')
                        {
                            Object.entries(priceList).find(
                                {[key]} => id === key
                            )).[1]
                        }
                        {currency}
                    </div>
                });
                </ul>
            </main>
        </div>
    };
};

createRoot(document.getElementById('root') as HTMLElement).render(<AppTimer />);

setTimeout(() => console.clear(), 1000);