import { useDispatch, useSelector } from 'react-redux';
import { addTodoAsync } from '../redux/todos/todosSlice';
import Loading from './Loading';

function Form() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.todos.addNewTodoLoading);
  const error = useSelector((state) => state.todos.addNewTodoError);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.todo.value.trim();
    if (title === '') return;

    await dispatch(addTodoAsync({ title }));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
      <input disabled={loading} className="new-todo" name="todo" placeholder="What needs to be done?" autoFocus />
      {loading && <Loading />}
      {error && <Error message={error} />}
    </form>
  );
}

export default Form;
