import { memo, useCallback, useEffect, useMemo, useState } from 'react';

// /constants
const TODOS_ENDPOIND = 'https://jsonplaceholder.typicode.com/todos';

// /components
export const List = memo(({ todos, onToggleTodo }) => {
	return (
		<ul>
			{todos?.map(({ id, completed, title }) => (
				<li key={id} >
					<button
						onClick={() => onToggleTodo(id)}
						type='button'
						style={{
							textDecoration: completed ? 'line-through' : undefined,
							cursor: 'pointer',
							display: 'inline-block',
						}}
					>
						{title}
					</button>
				</li>
			))}
		</ul>
	);
});

async function fetchTodos() {
	try {
		const response = await fetch(TODOS_ENDPOIND);
		const data = await response.json();

		return data;
	} catch (err) {
		console.error(err);

		return []
	}
}

const BuggyTodo = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');

	const completedCount = useMemo(
		() => todos.filter((todo) => todo.completed).length,
		[todos],
	);

	useEffect(() => {
		fetchTodos().then((data) => setTodos(data));
	}, []);

	useEffect(() => {
		document.title = `${completedCount} tasks completed`;
	}, [completedCount]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newTodo === '') return;

		setTodos([
			...todos,
			{
				id: crypto.randomUUID(),
				title: newTodo,
				completed: false,
			},
		]);
	};

	const handleToggle = useCallback((id) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			);
		});
	}, []);

	return (
		<div className="todo-container">
			<h1>Buggy Todo List</h1>
			<form onSubmit={handleSubmit}>
				<label>
					<input
						name="new-todo"
						type="text"
						value={newTodo}
						onChange={(e) => setNewTodo(e.target.value)}
						placeholder="Add new todo"
					/>
				</label>
				<button type="submit">Add Todo</button>
			</form>
			<List todos={todos} onToggleTodo={handleToggle} />
			<div>Completed tasks: {completedCount}</div>
		</div>
	);
};

export default BuggyTodo;
