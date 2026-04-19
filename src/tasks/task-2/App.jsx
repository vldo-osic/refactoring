import React, { useState, useEffect } from 'react';

const BuggyTodo = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	let [completedCount, setCompletedCount] = useState(0);

	useEffect(() => {
		fetchTodos();
	});

	async function fetchTodos() {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/todos',
		);
		const data = await response.json();
		setTodos(data);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newTodo === '') return;

		setTodos([
			...todos,
			{
				id: todos.length + 1,
				title: newTodo,
				completed: false,
			},
		]);
	};

	const toggleTodo = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				completedCount += todo.completed ? -1 : 1;
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	useEffect(() => {
		document.title = `${completedCount} tasks completed`;
	}, []);

	return (
		<div class="todo-container">
			<h1>Buggy Todo List</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					placeholder="Add new todo"
				/>
				<button type="submit">Add Todo</button>
			</form>
			<ul>
				{todos?.map((todo) => (
					<li
						key={todo.id}
						style={{
							textDecoration: todo.completed && 'line-through',
						}}
						onClick={() => toggleTodo(todo.id)}
					>
						{todo.title}
					</li>
				))}
			</ul>
			<div>Completed tasks: {completedCount}</div>
		</div>
	);
};

export default BuggyTodo;
