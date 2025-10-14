import { useDispatch, useSelector } from 'react-redux';
import { destroy, selectActiveFilter, toggle } from '../redux/todos/todosSlice';

function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectActiveFilter);

  const handleDestroy = (id) => {
    if (window.confirm('Are you sure?')) dispatch(destroy(id));
  };

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? 'completed' : ''}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={!!item.completed}
              readOnly
              onChange={() => dispatch(toggle(item.id))}
            />
            <label> {item.title} </label>
            <button className="destroy" onClick={() => handleDestroy(item.id)}></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
