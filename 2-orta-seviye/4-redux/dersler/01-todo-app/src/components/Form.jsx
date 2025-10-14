import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos/todosSlice';

function Form() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = e.target.todo.value.trim();
    if (todoText === '') return;

    const newTodo = {
      id: nanoid(),
      text: todoText,
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
