import { memo, useMemo, useState } from 'react';
// import './index.css';
// import Todo from './Todo';

export const TODO_LIST = [
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

const filterTodos = (todos, searchText) => {
	return todos.filter(todo => todo.name.toLowerCase().includes(searchText.toLowerCase()))
}

const Todo = memo((props) => <p>{JSON.stringify(props.todo)}</p>)

const FilteredList = memo((props) => {
	const { searchText } = props;

	const filteredTodos = useMemo(() => filterTodos(TODO_LIST, searchText), [searchText])

	return (
		<ul>
			{filteredTodos.map(
				(todo) => (
					<li key={todo.id}>
						<Todo todo={todo} />
					</li>
				),
			)}
		</ul>
	)
})

export default function App() {
	const [searchText, setSearchText] = useState('');

	const handleChange = (e) => {
		setSearchText(e.target.value);
	};

	return (
		<div className="App">
			<label>
				<input type="text" value={searchText} onChange={handleChange} />
			</label>
			<FilteredList searchText={searchText}/>
		</div>
	);
}
