import { configureStore } from '@reduxjs/toolkit';
import userReducer from './src/features/user/userSlice';
import cartReducers from './src/features/cart/cartSlice';
const store = configureStore({
  reducer: { user: userReducer, cart: cartReducers },
});
export default store;
