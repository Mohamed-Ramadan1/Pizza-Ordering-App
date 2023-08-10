import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitePrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    increaseItemQuantity(state, action) {
      const pizzaId = action.payload;
      const item = state.cart.find((item) => item.pizzaId === pizzaId);

      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitePrice;
      }
    },

    decreaseItemQuantity(state, action) {
      const pizzaId = action.payload;
      const item = state.cart.find((item) => item.pizzaId === pizzaId);

      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitePrice;

        if (item.quantity === 0) {
          state.cart = state.cart.filter(
            (cartItem) => cartItem.pizzaId !== pizzaId,
          );
        }
      }
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
export const getTotalCartQuantaty = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantatyById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
