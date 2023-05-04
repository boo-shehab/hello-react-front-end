import { createSlice } from '@reduxjs/toolkit';
import getText from './getText';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    data: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getText.fulfilled, (state, action) => {
      if (action.payload.success) {
        return { ...state, data: action.payload.data };
      }
      return { ...state, error: action.payload.err };
    });
  },
});

export default messageSlice.reducer;