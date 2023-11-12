import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  isLoggedIn: boolean;
  isNew: boolean;
  status?: string;
  passport?: string;
  phone?: string;
  address?: string;
  id?:string;
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
  token: '',
  isLoggedIn: false,
  isNew: true,
  status: 'Pending',
  passport: 'none',
  phone: '',
  address: '',
  id:''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.id = action.payload.id;
      state.passport=action.payload.passport
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {setUser, setToken} = userSlice.actions;

export default userSlice.reducer;
