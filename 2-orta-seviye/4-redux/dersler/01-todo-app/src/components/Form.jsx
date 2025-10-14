import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos/todosSlice';

function Form() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTodo = {
      id: nanoid(),
      text: formData.get('todo'),
      completed: false,
    };
    dispatch(addTodo(newTodo));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="new-todo" name="todo" placeholder="What needs to be done?" autoFocus />
    </form>
  );
}

export default Form;
