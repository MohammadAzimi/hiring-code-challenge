import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface exampleSlice {
  count: number;
}

const initialState: exampleSlice = {
  count: 0,
};

const exampleSlice = createSlice({
  name: 'COUNT',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<exampleSlice>) => {
      return {
        ...action.payload,
      };
    },
    add: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    increment: state => {
      state.count = state.count + 1;
    },
    decrement: state => {
      state.count = state.count - 1;
    },
  },
});

export {exampleSlice};
