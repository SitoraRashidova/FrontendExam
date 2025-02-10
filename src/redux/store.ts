import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./reducers/wishlist-reducer"; 
import { loadState, saveState } from "../config/storage";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
  preloadedState: {
    wishlist: loadState("wishlist") || { items: [] },
  },
});

// Local storage-ni yangilash
store.subscribe(() => {
  saveState("wishlist", store.getState().wishlist);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

