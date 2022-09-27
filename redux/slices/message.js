import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: {
      type: "info",
      title: "",
      body: ""
    }
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    }
  },
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
