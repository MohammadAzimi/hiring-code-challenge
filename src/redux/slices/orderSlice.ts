import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Order} from '../../types';

interface orderSlice {
  orders: Order[];
}

const initialState: orderSlice = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'ORDERS',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Order>) => {
      state.orders.unshift(action.payload);
    },
    remove: (state, action: PayloadAction<Order>) => {
      const index = state.orders.findIndex(v => v.id === action.payload.id);
      state.orders.slice(index, 1);
    },
    update: (state, action: PayloadAction<Order>) => {
      const index = state.orders.findIndex(v => v.id === action.payload.id);
      const copy = [...state.orders];
      copy[index] = action.payload;
      return {
        orders: [...copy],
      };
    },
    clear: state => {
      state.orders = [];
    },
  },
});

export {orderSlice};
