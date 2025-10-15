import { useSelector } from 'react-redux';
import Item from '../pages/Item';
import { contactSelectors } from '../redux/contactSlice';

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <Item key={contact.id} item={contact} />
        ))}
      </ul>
    </div>
  );
}

export default List;
