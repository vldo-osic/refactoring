import { memo, useEffect, useEffectEvent, useState } from 'react';

// import { fetchTasks } from './tasks-api';

interface ITask {
	id: string;
	text: string;
}
const fetchTasks = () => Promise.resolve([{ id: '1', text: 'abc' }]);

interface TodoListProps {
	items: ITask[];
}
const ToDoList = memo(({ items }: TodoListProps) => {
	console.log('render')
	return (
		<div>
			<ul>{items.length && items.map(({ id, text }) => <li key={id}>{text}</li>)}</ul>
		</div>
	);
}, (prev, next) => JSON.stringify(prev) === JSON.stringify(next));

const App = () => {
	const [tasks, setTasks] = useState<ITask[]>([]);

	const handleRefreshTasks = useEffectEvent(async (e: KeyboardEvent) => {
		if (e.key === 'r') {
			const tasks = await fetchTasks();
			setTasks(tasks);
		}
	});

	useEffect(() => {
		document.addEventListener('keydown', handleRefreshTasks);
		return () => {
			document.removeEventListener('keydown', handleRefreshTasks);
		};
	});

	return (
		<div>
			<h2>пример задач: </h2>
			<ToDoList
				items={[
					{ id: '1', text: 'Полить цветы' },
					{ id: '2', text: 'Помыть машину' },
					{ id: '3', text: 'Выкинуть мусор' },
				]}
			/>
			<h2>Сегодня:</h2>
			<ToDoList items={tasks} />
			<h2>Завтра:</h2>
			<ToDoList items={[]} />
		</div>
	);
};

export default App;
