import React, { useState } from 'react';
import './index.css';
import Todo from './Todo';

export const todo_list = [
	{
		name: 'clear',
		id: '1',
		imagesrc: 'https://avatars.githubusercontent.com/u/45297354?v=4',
	},
	{
		name: 'buy',
		id: '2',
		imagesrc: 'https://avatars.githubusercontent.com/u/6751787?v=4',
	},
	{
		name: 'change',
		id: '3',
	},
	{
		name: 'code',
		id: '4',
	},
	{
		name: 'test',
		id: '5',
	},
];

export default function App() {
	const [search, setsearch] = useState('');

	return (
		<div className="App">
			<input
				type="text"
				value={search}
				onChange={(data) => setsearch(data.target.value)}
			/>

			{todo_list
				.filter((todo) => todo.name.includes(search))
				.map((el) => (
					<Todo todo={el} />
				))}
		</div>
	);
}
