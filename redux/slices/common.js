import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    mobileMenuShow: false,
  },
  reducers: {
    switchMobileMenuMode: (state, action) => {
      state.mobileMenuShow = action.payload
    },
  },
});

export const { switchBetSlipMode, switchMobileMenuMode } = commonSlice.actions;

export default commonSlice.reducer;
