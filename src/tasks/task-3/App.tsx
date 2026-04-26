// App.tsx

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { fetchTodos } from './features/todoSlice';
import type { AppDispatch } from './store';

const App = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	return (
		<div>
			<AddTodoForm />
			<TodoList />
		</div>
	);
};

export default App;
