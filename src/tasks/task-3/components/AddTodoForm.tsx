import { type FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const AddTodoForm = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (text.trim()) {
			dispatch(addTodo(text.trim()));
			setText('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
			<button type="submit" disabled={!text.trim()}>
				Add Todo
			</button>
		</form>
	);
};

export default AddTodoForm;
