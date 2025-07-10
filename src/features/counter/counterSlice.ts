// src/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByOne(state) {
      state.count += 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decrementByOne(state) {
      state.count -= 1;
    },
    decrementByAmount(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
    resetCounter(state) {
      state.count = 0;
    },
  },
});

export const {
  incrementByOne,
  decrementByOne,
  incrementByAmount,
  decrementByAmount,
  resetCounter,
} = counterSlice.actions;

export default counterSlice.reducer;
