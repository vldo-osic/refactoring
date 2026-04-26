import type { IRootState } from './store';
import { ClientType } from './store/itemsSlice';

export function getData(state: IRootState) {
	const response = fetch('/api/companies', {
		method: 'POST',
		body: JSON.stringify({
			id: state.client.id,
			type: ClientType.company,
		}),
	});

	return response;
}
