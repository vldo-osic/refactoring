import { Provider } from 'react-redux';
import Component from './component';
import { store } from './store';

function Root() {
    return (
        <Provider store={store}>
            <Component />
        </Provider>
    );
}

export default Root;