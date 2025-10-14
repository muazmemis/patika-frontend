import { useDispatch, useSelector } from 'react-redux';
import { changeActiveFilter, clearCompleted } from '../redux/todos/todosSlice';

function ContentFooter() {
  const itemsLeft = useSelector((state) => state.todos.items.filter((item) => !item.completed).length);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(changeActiveFilter(filter));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> item{itemsLeft !== 1 ? 's' : ''} left
      </span>
      <ul className="filters">
        <li>
          <a className={activeFilter === 'all' ? 'selected' : ''} onClick={() => handleFilterChange('all')}>
            All
          </a>
        </li>
        <li>
          <a className={activeFilter === 'active' ? 'selected' : ''} onClick={() => handleFilterChange('active')}>
            Active
          </a>
        </li>
        <li>
          <a className={activeFilter === 'completed' ? 'selected' : ''} onClick={() => handleFilterChange('completed')}>
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>Clear completed</button>
    </footer>
  );
}

export default ContentFooter;
