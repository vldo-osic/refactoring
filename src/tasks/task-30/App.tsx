// App.jsx

import useInfiniteScroll from './hooks';

const INIT_PAGE = 1;

const App = () => {

	const [items, isLoading, error, lastItemRef] = useInfiniteScroll(INIT_PAGE);

	return (
		<div>
			{items.map((item, index) => {
				if (index === items.length - 1) {
					return (
						<div ref={lastItemRef} key={item.id}>
							<p>{item.title}</p>
						</div>
					)
				} else {
					return (
						<div key={item.id}>
							<p>{item.title}</p>
						</div>
					)
				}
			})}
			{isLoading ? <p>Загрузка...</p> : null}
			{error ? <p>Ошибка: {error.message}</p> : null}
		</div>
	);
};

export default App;
