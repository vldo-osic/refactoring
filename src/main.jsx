import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './tasks/task-13/App';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
