// dataService.js
import { ClientType as _ClientType } from './root';

export function getData(state) {
  const response = fetch('/api/companies', {
    method: 'POST',
    body: JSON.stringify({
      id: state.client.id,
      type: _ClientType.company
    })
  });

  return response;
}

export const ClientType = _ClientType;

// component.jsx
import * as React from 'react';
import { getData, ClientType } from './dataService';

function Component(props) {
  const { store } = props;
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = getData(store.getState());
      const data = await (await response).json();
      setItems(data.items);
    })();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div className={`item item_type_${item.type}`} key={item.id}>
          {item.type === ClientType.person ? (
            <span>{item.name}</span>
          ) : (
            <span>Компания {item.id}</span>
          )}
          <button onClick={() => { console.log(item.id); }}>choose</button>
        </div>
      ))}
    </div>
  );
}

export default Component;

// root.jsx
import * as React from 'react';
import Component from './component';
import store from './store';

export const ClientType = {
  'company': 'company',
  'person': 'person',
};

function Root() {
  return (
    <Component store={store} />
  );
}

export default Root;

// app.jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './root';

ReactDOM.render(<Root />, document.querySelector('#app'));