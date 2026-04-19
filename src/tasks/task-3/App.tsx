// App.tsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { fetchTodos } from './features/todoSlice';
import type { RootState } from './store';

const App = () => {
	const todos = useSelector((state: RootState) => state.todos.todos);

	fetchTodos();

	return (
		<div>
			<AddTodoForm />
			{todoStatus === 'loading' && <p>Loading...</p>}
			{todoStatus === 'failed' && <p>Failed to load todos.</p>}
			<TodoList todos={todos} />
		</div>
	);
};

export default App;
