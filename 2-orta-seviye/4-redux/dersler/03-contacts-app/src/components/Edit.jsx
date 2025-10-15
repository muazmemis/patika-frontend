// useparams
import { useParams } from 'react-router';
import EditForm from './EditForm';

import { useSelector } from 'react-redux';
import { contactSelectors } from '../redux/contactSlice';

function Edit() {
  const { id } = useParams();
  const contact = useSelector(contactSelectors.selectById(id));

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div>
      Edit {id}
      <EditForm contact={contact} />
    </div>
  );
}

export default Edit;
