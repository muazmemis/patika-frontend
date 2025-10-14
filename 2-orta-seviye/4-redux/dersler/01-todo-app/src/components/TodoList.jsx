import { useSelector } from 'react-redux';

function TodoList() {
  const items = useSelector((state) => state.todos.items);
  console.log(items);

  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className={item.completed ? 'completed' : ''}>
          <div className="view">
            <input className="toggle" type="checkbox" checked={!!item.completed} readOnly />
            <label> {item.text} </label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
