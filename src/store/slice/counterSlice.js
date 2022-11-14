import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};

const slice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    handleCount: (state, action) => {
      state.count =
        action.payload === "+"
          ? state.count + 1
          : action.payload === "-"
          ? state.count === 0
            ? state.count
            : state.count - 1
          : (state.count = 0);
    },
  },
});

export const { decrease, increase, reset, handleCount } = slice.actions;
export default slice.reducer;
