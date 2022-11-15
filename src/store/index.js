import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slice/counterSlice";
import listSlice from "./slice/listSlice";

// state in here
export default configureStore({
  reducer: {
    counter: counterSlice,
    list: listSlice,
  },
});
