import { createSlice } from '@reduxjs/toolkit'

export const generalSlice = createSlice({
  name: 'general',
  initialState: {
    locale: "en",
  },
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLocale } = generalSlice.actions

export default generalSlice.reducer