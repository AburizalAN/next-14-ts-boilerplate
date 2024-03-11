import { createSlice } from '@reduxjs/toolkit'

export const generalSlice = createSlice({
  name: 'general',
  initialState: {
    locale: "en",
    token: "",
  },
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLocale, setToken } = generalSlice.actions

export default generalSlice.reducer