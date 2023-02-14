import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsInitState } from 'redux/init-state';
// import { contactsListReducer, filterReducer } from 'redux/reducer';
import { contactsReducer } from 'redux/contacts.slice';
import { filterReducer } from 'redux/filter.slice';

const persistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  preloadedState: contactsInitState,
  devTools: true,
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
