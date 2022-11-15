import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
  listData: [],
  searchData: [],
  isLoading: true,
  isError: false,
  errorMessage: "",
};

const slice = createSlice({
  name: "list",
  initialState,
  reducers: {
    // all logic will be write in here
    search: (state, { payload }) => {
      const searchValue = payload.toLowerCase();
      let listSearch = [];
      const searchData = state.listData.filter((val) =>
        val.name.toLowerCase().includes(searchValue)
      );
      listSearch = searchData;
      state.searchData = listSearch;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchList.fulfilled, (state, actions) => {
        //SUCCESS
        state.isLoading = false;
        state.listData = actions.payload;
      })
      .addCase(fetchList.rejected, (state, actions) => {
        // FAILED
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = actions.error.message;
      });
  },
});

export const { search } = slice.actions;
export default slice.reducer;

export const fetchList = createAsyncThunk("fetchList", async () => {
  let newArr = [];
  try {
    const { data } = await Axios.get("https://jsonplaceholder.typicode.com/comments");
    for (let i = 0; i < 15; i++) {
      newArr.push(data[i]);
    }
    return newArr;
  } catch (error) {
    console.log("listSlice.js");
    console.log(error);
    throw error.message;
  }
});
