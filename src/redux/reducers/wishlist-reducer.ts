import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistReducer = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default wishlistReducer.reducer;
export const { addToWishlist, removeFromWishlist } = wishlistReducer.actions;
