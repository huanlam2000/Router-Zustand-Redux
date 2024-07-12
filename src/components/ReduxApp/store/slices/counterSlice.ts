import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

export interface CounterState {
  counter: number
}

// Define the initial state using that type
const initialState: CounterState = {
  counter: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    incremented: state => {
      state.counter += 1
    },
    decremented: state => {
      state.counter -= 1
    }
  }
})

export const {incremented, decremented} = counterSlice.actions

export const countSelector = (state: RootState) => state.counter.counter

export default counterSlice.reducer
