// import { createAction } from '@reduxjs/toolkit';

// export const addContact = (newContact) => {
//   return {
//     type: 'tasks/addContact',
//     payload: newContact,
//   };
// };

// export const deleteContact = (id) => {
//   return {
//     type: 'tasks/deleteContact',
//     payload: id,
//   };
// };

// export const setFilterValue = (value) => {
//   return {
//     type: 'filter/setFilterValue',
//     payload: value,
//   };
// };

// ================================================================================

// export const addContactAction = createAction('tasks/addContact', newContact => {
//   return {
//     type: 'tasks/addContact',
//     payload: newContact,
//   };
// });
// export const deleteContactAction = createAction('tasks/deleteContact', id => {
//   return {
//     type: 'tasks/deleteContact',
//     payload: id,
//   };
// });
// export const setFilterValueAction = createAction('filter/setFilterValue', value => {
//   return {
//     type: 'filter/setFilterValue',
//     payload: value,
//   };
// });
// console.log(addContact({name: 'Learn Redux Toolkit', number: 123456}));
