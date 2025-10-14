import { useDispatch, useSelector } from 'react-redux';
import { changeActiveFilter, clearCompleted, selectTodos } from '../redux/todos/todosSlice';
import { useEffect } from 'react';

function ContentFooter() {
  const itemsLeft = useSelector((state) => selectTodos(state).filter((item) => !item.completed).length);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(changeActiveFilter(filter));
  };

  useEffect(() => {
    localStorage.setItem('activeFilter', activeFilter);
  }, [activeFilter]);

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
      <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
