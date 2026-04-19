import React, { useEffect, useState } from 'react';
import { fetchTasks } from './tasks-api';

const ToDolist = ({ items }) => {
	return (
		<div>
			<ul>
				{items.length &&
					items.map((item, index) => (
						<li key={index}>{item.text}</li>
					))}
			</ul>
		</div>
	);
};

const App = () => {
	const [tasks, setTasks] = useState(null);
	const handleRefreshTasks = (e) => {
		if ((e.key = 'r')) {
			const tasks = fetchTasks();
			setTasks(tasks);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleRefreshTasks);
	});

	return (
		<div>
			<h2>пример задач: </h2>
			<ToDolist
				items={[
					{ id: 1, text: 'Полить цветы' },
					{ id: 2, text: 'Помыть машину' },
					{ id: 3, text: 'Выкинуть мусор' },
				]}
			/>
			<h2>Сегодня:</h2>
			<ToDolist items={tasks} />
			<h2>Завтра:</h2>
			<ToDolist items={[]} />
		</div>
	);
};

export default App;
