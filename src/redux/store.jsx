import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './slice';

export const store = configureStore({
  reducer: {
    contactList: contactSlice.reducer,
  },
});
