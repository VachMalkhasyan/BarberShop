import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userProfile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.userProfile = action.payload;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.userProfile = null;
    },
    updateProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { signIn, signOut, updateProfile } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;