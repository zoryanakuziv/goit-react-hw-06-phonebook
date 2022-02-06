import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.value.push(action.payload);
    },

    deleteContact(state, action) {
      state.value = state.value.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
console.log(contactsSlice);
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsSelector = (state) => state.contacts.value;
export const contactsReducer = contactsSlice.reducer;
