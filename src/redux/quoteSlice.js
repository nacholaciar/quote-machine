import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quote: "",
  author: ""
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    },
    updateQuote: (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    }
  }
});

export const { setQuote, updateQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
