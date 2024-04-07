import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "src/store/category-slice";

export const createStore = () =>
  configureStore({
    reducer: {
      category: categoryReducer,
    },
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
