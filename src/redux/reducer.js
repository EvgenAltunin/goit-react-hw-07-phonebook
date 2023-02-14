// import { createReducer } from '@reduxjs/toolkit';
// import { contactsInitState } from 'redux/init-state';
// import {
//   addContactAction,
//   deleteContactAction,
//   setFilterValueAction,
// } from 'redux/actions';

// export const contactsListReducer = (state = contactsInitState.contacts, action) => {
//   switch (action.type) {
//     case 'tasks/addContact':
//       return [...state.contacts, action.payload];
//     case 'tasks/deleteContact':
//       return state.contacts.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

// export const contactsListReducer = createReducer(
//   contactsInitState,
//   builder => {
//     builder
//       .addCase(addContactAction, (state, action) => {
//         return [...state, action.payload];
//       })
//       .addCase(deleteContactAction, (state, action) => {
//         return state.filter(contact => contact.id !== action.payload);
//       });
//   }
// );

// =================================================================================

// export const filterReducer = (state = contactsInitState.filter, action) => {
//   switch (action.type) {
//     case 'filter/setFilterValue':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const filterReducer = createReducer(contactsInitState, builder => {
//   builder.addCase(setFilterValueAction, (_, action) => {
//     return action.payload;
//   });
// });
