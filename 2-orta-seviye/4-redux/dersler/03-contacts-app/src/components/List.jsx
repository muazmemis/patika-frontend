import { useDispatch, useSelector } from 'react-redux';
import { contactSelectors, removeAllContacts } from '../redux/contactSlice';
import Item from './Item';

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    if (total > 0 && window.confirm('Are you sure you want to delete all contacts?')) dispatch(removeAllContacts());
  };

  return (
    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Contact List</h2>
      {total > 0 && (
        <div
          style={{
            cursor: 'pointer',
            color: 'red',
            textAlign: 'right',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            width: '100%',
            fontWeight: 'bold',
          }}
          onClick={handleDeleteAll}
        >
          Delete All
        </div>
      )}
      <ul
        style={{
          listStyleType: 'none',
          width: '30rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {contacts.map((contact) => (
          <Item key={contact.id} item={contact} />
        ))}
      </ul>
    </div>
  );
}

export default List;
