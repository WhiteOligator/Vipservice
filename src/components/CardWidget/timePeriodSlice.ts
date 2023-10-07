import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

// Define a type for the slice state
interface CounterState {
  valueThere: string[];
  valueBack: string[];
}

// Define the initial state using that type
const initialState: CounterState = {
  valueThere: ["9:20", "11:05"],
  valueBack: ["9:20", "11:05"],
};

type ActionTypeSetPeriod = {
  period: string[];
  number: number;
};

export const timePeriodSlice = createSlice({
  name: "period",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPeriod: (state, action: PayloadAction<ActionTypeSetPeriod>) => {
      if (action.payload.number === 0) {
        state.valueThere = action.payload.period;
      } else state.valueBack = action.payload.period;
    },
  },
});

export const { setPeriod } = timePeriodSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPeriod = (state: RootState) => state.period;

export default timePeriodSlice.reducer;
