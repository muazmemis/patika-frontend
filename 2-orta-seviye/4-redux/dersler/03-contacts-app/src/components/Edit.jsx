// useparams
import { useParams } from 'react-router';
import EditForm from './EditForm';

import { useSelector } from 'react-redux';
import { contactSelectors } from '../redux/contactSlice';

function Edit() {
  const { id } = useParams();

  const contactsState = useSelector((state) => state.contacts);

  const contact = useSelector((state) => {
    return contactSelectors.selectById(state, id);
  });

  if (!contact) {
    return (
      <div>
        <h2>Contact not found</h2>
        <p>ID: {id}</p>
        <p>State: {JSON.stringify(contactsState, null, 2)}</p>
      </div>
    );
  }

  return (
    <div>
      Edit {id}
      <EditForm contact={contact} />
    </div>
  );
}

export default Edit;
