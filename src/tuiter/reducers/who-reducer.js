import { createSlice } from "@reduxjs/toolkit";
import whoArray from "./who.json";

const whoSlice = createSlice({
  name: "Who",
  initialState: whoArray,
});

export default whoSlice.reducer;
