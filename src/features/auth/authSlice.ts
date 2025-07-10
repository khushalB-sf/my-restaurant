// src/features/counter/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  isAuthenticated: boolean
}

const initialState: CounterState = { isAuthenticated: true }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload
    }
  }
})

export const { setIsAuthenticated } = authSlice.actions

export default authSlice.reducer
