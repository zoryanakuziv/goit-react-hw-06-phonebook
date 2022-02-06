import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
});
console.log(filterSlice);
export const { filterContacts } = filterSlice.actions;
export const filterSelector = (state) => state.filter;
export const filterReducer = filterSlice.reducer;

/* import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./filter-actions";
const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
export filter.reducer;
 */
