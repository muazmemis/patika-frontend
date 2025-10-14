import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../redux/todos/todosSlice';

function TodoList() {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggle({ id }));
  };

  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className={item.completed ? 'completed' : ''}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={!!item.completed}
              readOnly
              onChange={() => handleToggle(item.id)}
            />
            <label> {item.text} </label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
