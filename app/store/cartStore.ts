import { create } from "zustand";
import { ObjectId } from "mongodb";

export interface CartItem {
  userId: ObjectId;
  items: Item[];
  cartTotal: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Item {
  productId: ObjectId;
  name: string;
  price: number;
  unit: string;
  quantity: number;
  image: string;
}

interface CartState {
  cartItems: Item[];
  isCartOpen: boolean;
  loading: boolean;
  cartTotal: number;
  productCount: number;
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: ObjectId) => void;
  clearCart: () => void;
  updateQuantity: (productId: ObjectId, quantity: number) => void;
  toggleCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  isCartOpen: false,
  loading: false,
  cartTotal: 0,
  productCount: 0,
  addToCart: (item) => {
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) =>
          cartItem.productId.toString() === item.productId.toString()
      );

      const updatedItems = state.cartItems;
      let updateCartTotal = state.cartTotal;
      let updateProductCount = state.productCount;

      if (existingItemIndex > -1) {
        const existingItem = updatedItems[existingItemIndex];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: item.quantity,
          unit: item.unit,
        };
      } else {
        updatedItems.push(item);
        updateProductCount++;
      }

      updateCartTotal = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        cartItems: updatedItems,
        cartTotal: updateCartTotal,
        productCount: updateProductCount,
      };
    });
  },
  removeFromCart: (itemId) => {
    set((state) => {
      const updatedItems = state.cartItems.filter(
        (item) => item.productId.toString() !== itemId.toString()
      );

      let updateCartTotal = state.cartTotal;

      if (updatedItems.length === 0) {
        updateCartTotal = 0;
      } else {
        updateCartTotal = updatedItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }

      return {
        cartItems: state.cartItems.filter(
          (item) => item.productId.toString() !== itemId.toString()
        ),
        cartTotal: updateCartTotal,
        productCount: state.productCount - 1,
      };
    });
  },
  updateQuantity: (productId, quantity) => {
    set((state) => {
      const updatedItems = state.cartItems.map((item) => {
        if (item.productId.toString() === productId.toString()) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      });

      let updateCartTotal = state.cartTotal;

      updateCartTotal = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        cartItems: updatedItems,
        cartTotal: updateCartTotal,
      };
    });
  },
  clearCart: () => {
    set(() => ({
      cartItems: [],
      cartTotal: 0,
      productCount: 0,
    }));
  },
  toggleCart: () => {
    set((state) => {
      return {
        isCartOpen: !state.isCartOpen,
      };
    });
  },
}));

export default useCartStore;
