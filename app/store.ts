import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;