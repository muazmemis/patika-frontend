import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState([]);

export const contactSelectors = contactAdaptor.getSelectors((state) => state.contacts);

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: contactAdaptor.addOne,
    addContacts: contactAdaptor.addMany,
    removeContact: contactAdaptor.removeOne,
  },
});

export const { addContact, addContacts, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
