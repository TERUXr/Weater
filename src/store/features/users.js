import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getPhotos = createAsyncThunk('users/getPhotos', async (count, reduxObj)=>{
  const result = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${count}`);
  if (result.ok) {
    const response = await result.json();
    return response
  } else {
    return reduxObj.rejectWithValue('Данные не найдены!')
  }
  console.log(result, reduxObj);
  
})

const initialState = {
  title: 'Users title',
  count: 0,
  skills: ['html', 'css', 'JavaScript'],
  photos: null,
  errorMess: ''
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addCount: (state, actions)=>{
        // console.log(actions);
        state.count += actions.payload
    },
    addSkill: (state, actions)=>{
      state.skills.push(actions.payload)
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(getPhotos.pending, (state, actions)=>{console.log('pending');})
    builder.addCase(getPhotos.fulfilled, (state, actions)=>{
      state.photos = actions.payload
    })
    builder.addCase(getPhotos.rejected, (state, actions)=>{
      state.errorMess = actions.payload
      // console.log(actions);
    })
  }
})

export const { addCount, addSkill } = usersSlice.actions

export default usersSlice.reducer