import { configureStore, createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [{ id: '1', name: 'vova', number: '09965698983' }],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    delateContact: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export const { addContact, delateContact } = contactsSlice.actions;
export const { changeFilter } = filterSlice.actions;
