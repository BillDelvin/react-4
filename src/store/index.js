import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slice/counterSlice";

// state in here
export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
