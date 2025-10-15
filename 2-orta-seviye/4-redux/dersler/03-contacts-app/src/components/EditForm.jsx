import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../redux/contactSlice';

function EditForm({ contact }) {
  const [name, setName] = useState(contact.name);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber) return;

    dispatch(editContact({ id: contact.id, changes: { name, phoneNumber } }));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '0.5rem', width: '200px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          style={{ padding: '0.5rem', width: '200px', border: '1px solid #ccc', borderRadius: '4px' }}
          type="number"
          aria-setsize={10}
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" style={{ padding: '1rem 1rem', cursor: 'pointer' }}>
          Update
        </button>
      </form>
    </div>
  );
}

export default EditForm;
