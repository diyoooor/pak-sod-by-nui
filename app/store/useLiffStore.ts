import { create } from "zustand";
import liff from "@line/liff";

interface LiffProfile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
}

interface LiffState {
  isLoggedIn: boolean;
  profile: LiffProfile | undefined;
  error: string | null;
  loading: boolean;
  initializeLiff: () => Promise<void>;
  login: () => void;
  logout: () => void;
}

export const useLiffStore = create<LiffState>((set) => ({
  isLoggedIn: false,
  profile: undefined,
  error: null,
  loading: true,
  initializeLiff: async () => {
    try {
      await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! });

      if (liff.isLoggedIn()) {
        const profile = await liff.getProfile();
        set({ isLoggedIn: true, profile, loading: false });
      } else {
        set({ loading: false });
      }
    } catch (err) {
      console.error("LIFF initialization failed", err);
      set({ error: "LIFF initialization failed", loading: false });
    }
  },

  login: () => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  },

  logout: () => {
    if (liff.isLoggedIn()) {
      liff.logout();
      set({ isLoggedIn: false, profile: undefined });
    }
  },
}));
