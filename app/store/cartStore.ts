import { Product } from "@/app/types/product-type";
import { create } from "zustand";

interface CartItem {
  product: Product;
  quantity: number;
  unit: string;
}

interface CartState {
  cartItems: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));

export default useCartStore;
