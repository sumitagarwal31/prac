import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loginAction = createAsyncThunk('user/loginAction', async (param, { getState }) => {
  const { credential: { password, userName } } = getState().user;
  if (param.username == userName && param.password == password)
    return true
  else throw ('invalid credential')
})

const initialState = {
  credential: { userName: 'hruday@gmail.com', password: 'hruday123' },
  user: [],
}

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [loginAction.fulfilled]: (state, action) => {
      state.user = [
        { id: 1, name: 'test1', age: 11, gender: 'male', email: 'test1@gmail.com', phone: '9415346313' },
        { id: 2, name: 'test2', age: 12, gender: 'male', email: 'test2@gmail.com', phone: '9415346314' },
        { id: 3, name: 'test3', age: 13, gender: 'male', email: 'test3@gmail.com', phone: '9415346315' },
        { id: 4, name: 'test4', age: 14, gender: 'male', email: 'test4@gmail.com', phone: '9415346316' },
        { id: 5, name: 'test5', age: 15, gender: 'male', email: 'test5@gmail.com', phone: '9415346317' },
        { id: 6, name: 'test6', age: 16, gender: 'male', email: 'test6@gmail.com', phone: '9415346318' },
      ];
    },
    [loginAction.rejected]: (state, action) => {
      state.user = [];
    },

  }
})


export const { } = usersSlice.actions;
export default usersSlice.reducer;
