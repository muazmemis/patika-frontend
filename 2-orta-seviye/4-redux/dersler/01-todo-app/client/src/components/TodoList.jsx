import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAsync, getTodosAsync, toggleTodoAsync } from '../redux/todos/services';
import { selectActiveFilter } from '../redux/todos/todosSlice';
import Error from './Error';
import Loading from './Loading';

function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectActiveFilter);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  if (error) return <Error message={error} />;

  if (loading) return <Loading />;

  const handleDestroy = async (id) => {
    if (window.confirm('Are you sure?')) await dispatch(deleteTodoAsync(id));
  };

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed } }));
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
              onChange={() => handleToggle(item.id, !item.completed)}
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
