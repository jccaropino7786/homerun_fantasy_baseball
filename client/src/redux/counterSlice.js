import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialStateValues,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    decrementByAmount: (state, action) => {
      state.count -=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer