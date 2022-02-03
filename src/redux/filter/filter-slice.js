/* import { createSlice } from "@reduxjs/toolkit";
//const initialState = { filter: "" };
const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  redusers: {
    filterContacts(state, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterSelector = (state) => state.filter;
export const filterReducer = filterSlice.reducer;
 */
