import { create } from "zustand";

interface CartItem {
  name: string;
  unit: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
  increaseQuantity: (name) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (name) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.name === name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
}));
