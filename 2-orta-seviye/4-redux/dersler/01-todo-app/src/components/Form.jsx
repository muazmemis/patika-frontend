import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos/todosSlice';

function Form() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.todo.value.trim();
    if (title === '') return;

    dispatch(addTodo({ title }));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="new-todo" name="todo" placeholder="What needs to be done?" autoFocus />
    </form>
  );
}

export default Form;
