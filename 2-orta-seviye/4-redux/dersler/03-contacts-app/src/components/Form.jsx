import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from '../redux/contactSlice';

function Form() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const contacts = name.split(',').map((name) => ({ id: nanoid(), name: name.trim() }));
    dispatch(addContacts(contacts));

    setName('');
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  );
}

export default Form;
