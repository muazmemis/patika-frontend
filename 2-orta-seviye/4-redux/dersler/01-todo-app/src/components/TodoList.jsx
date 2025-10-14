function TodoList() {
  return (
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label> Learn Javascript </label>
          <button className="destroy"></button>
        </div>
      </li>
    </ul>
  );
}

export default TodoList;
