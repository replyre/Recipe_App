import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const BookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    //adding elements in Bookmark component
    add(state, action) {
      state.push(action.payload);
    },
    // removing ellements in Bookmark component
    remove(state, action) {
      return state.filter((item) => item.label !== action.payload);
    },

    // removing all elements from bookmark (automatically called when logged  out)
    clearAll(state) {
      return (state = initialState);
    },
  },
});

export const { add, remove, clearAll } = BookmarkSlice.actions;
export default BookmarkSlice.reducer;
