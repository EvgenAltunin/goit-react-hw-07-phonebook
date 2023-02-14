import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from 'redux/init-state';

const contactsSlice = createSlice({
  name: 'items',
  initialState: contactsInitState.contacts,
  reducers: {
    addContactAction(state, { payload }) {
      state.items.unshift(payload)
    },
    deleteContactAction: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
