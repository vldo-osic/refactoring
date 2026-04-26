import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, selectStatus, selectTodos, toggleTodo } from "../features/todoSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const todoStatus = useSelector(selectStatus)
    
    const remove = (id: string) => {
        dispatch(deleteTodo(id));
    };
    const toggle = (id: string) => {
        dispatch(toggleTodo(id))
    }

    if (todoStatus === 'loading') {
        return <p>Loading...</p>
    }

    if (todoStatus === 'failed') {
        return <p>Failed to load todos.</p>
    }
    return (
        <ul>
            { todos.map(({ id, completed, title }) => (
                <li key={id}>
                    <div className="todo-item">
                        <p>{title}</p>
                        <button onClick={() => toggle(id)}>{completed ? '✅' : '□'}</button>
                        <button onClick={() => remove(id)}>❌</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;
