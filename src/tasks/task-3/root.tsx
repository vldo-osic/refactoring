// App.tsx

import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

const RootTask3 = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default RootTask3;
