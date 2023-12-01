import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const fetchPublishers = createAsyncThunk('data/fetchPublishers', async (token) => {
   
   console.log(token)
   const response = await fetch('https://performo.in/api/get_publisher.php', {
      method: 'POST',
      headers: {
         Authorization: token
      },
   });
   const data = await response.json();
   return data;
});

const dataSlice = createSlice({
   name: 'data',
   initialState: {
      data: [],
      status: 'idle',
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchPublishers.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchPublishers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
         })
         .addCase(fetchPublishers.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
         });
   },
});

export { fetchPublishers };
export default dataSlice.reducer;
