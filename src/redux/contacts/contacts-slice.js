import { createSlice } from "@reduxjs/toolkit";

const initialState = { contacts: [] };

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsSelector = (state) => state.contacts.contacts;
export const contactsReducer = contactsSlice.reducer;
