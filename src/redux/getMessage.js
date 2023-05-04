import { createAsyncThunk } from '@reduxjs/toolkit';

const getMessage = createAsyncThunk('random_greeting', async () => {
  try {
    const text = await fetch('http://127.0.0.1:3000/random_greeting');
    const data = await text.json();
    if (data.message) {
      return {
        success: true,
        data,
      };
    }
    console.log(data);
    return { success: true, data };
  } catch (err) {
    return { sucess: false, err: err.response.data.message };
  }
});

export default getMessage;
