import Form from '../components/Form';
import List from '../components/List';

import { useSelector } from 'react-redux';
import { contactSelectors } from '../redux/contactSlice';

function Contacts() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);

  return (
    <div>
      <h1>Contacts ({total})</h1>
      <Form />
      <List />
    </div>
  );
}

export default Contacts;
