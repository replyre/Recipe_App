import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import BookmarkReducer from "./BookmarkSlice";

// setting up redux store
const store = configureStore({
  //setting up reducers
  reducer: {
    user: userReducer,
    bookmark: BookmarkReducer,
  },
});

export default store;
