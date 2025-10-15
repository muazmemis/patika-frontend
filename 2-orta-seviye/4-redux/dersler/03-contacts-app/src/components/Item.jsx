import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { removeContact } from '../redux/contactSlice';

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) dispatch(removeContact(item.id));
  };

  return (
    <li
      style={{
        padding: '1rem',
        backgroundColor: '#126073ff',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <span style={{ color: 'blue' }}>{item.name}</span>
      <span style={{ color: 'orange' }}>{item.phoneNumber}</span>
      <span style={{ color: 'yellow' }}>
        <NavLink to={`/edit/${item.id}`}>Edit</NavLink>
      </span>
      <span
        style={{
          cursor: 'pointer',
          color: 'white',
          marginLeft: '2rem',
          backgroundColor: 'red',
          textAlign: 'center',
          borderRadius: '50%',
          width: '1.5rem',
          height: '1.5rem',
          lineHeight: '1.5rem',
        }}
        onClick={() => handleDelete(item.id)}
      >
        x
      </span>
    </li>
  );
}

export default Item;
