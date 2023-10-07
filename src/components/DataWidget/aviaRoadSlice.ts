import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

// Define a type for the slice state
interface CounterState {
  value: {
    fromCity: string,
    toCity: string,
    fromDate: string,
    toDate: string
  }
  road: number
}

export type Value = {
    fromCity: string,
    toCity: string,
    fromDate: string,
    toDate: string
}

// Define the initial state using that type
const initialState: CounterState = {
  value: {
    fromCity: 'Saint-Peterburg',
    toCity: 'Moscow',
    fromDate: '2023-10-03',
    toDate: '2023-10-03'
  },
  road: 0
}

export const aviaRoadSlice = createSlice({
  name: 'avia',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Value>) => {
        state.value = action.payload
        if (action.payload.toDate === '') {
            state.road = 0
        } else state.road = 1
    },
  },
})

export const { setData } = aviaRoadSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectData = (state: RootState) => state.avia

export default aviaRoadSlice.reducer