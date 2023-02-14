import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from 'redux/init-state';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContactAction: (state, { payload }) => {
      return [...state, payload];
    },
    deleteContactAction: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
