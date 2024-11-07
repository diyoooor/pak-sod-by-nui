import { create } from "zustand";
import liff from "@line/liff";
import { BASE_API_URL } from "../utils/environments";

export interface LiffProfile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
  phoneNumber?: string;
  shopName?: string;
  address?: string;
}

interface LiffState {
  isLoggedIn: boolean;
  profile: LiffProfile;
  error: string | null;
  loading: boolean;
  initializeLiff: () => Promise<void>;
  setProfile: (profile: LiffProfile) => void;
  login: () => void;
  logout: () => void;
}

export const useLiffStore = create<LiffState>((set) => ({
  isLoggedIn: false,
  profile: {} as LiffProfile,
  error: null,
  loading: true,
  initializeLiff: async () => {
    try {
      await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! }).then(() => {
        if (liff.isLoggedIn()) {
          liff
            .getProfile()
            .then(async (profile) => {
              set({
                isLoggedIn: true,
                profile,
              });

              const profileData = await fetch(
                `${BASE_API_URL}/api/users?userId=${profile.userId}`
              ).then(async (data) => await data.json());

              if (profileData.length === 0) {
                fetch(`${BASE_API_URL}/api/users`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    userId: profile.userId,
                    displayName: profile.displayName,
                    pictureUrl: profile.pictureUrl,
                    shopName: "-",
                    phoneNumber: "-",
                    address: "-",
                  }),
                });
              } else {
                set({
                  isLoggedIn: true,
                  profile: profileData,
                });
              }
            })
            .catch((err) => {
              console.error("Error getting profile:", err);
            });
        } else {
          set({ loading: false });
        }
      });
    } catch (err) {
      console.error("LIFF initialization failed", err);
      set({ error: "LIFF initialization failed", loading: false });
    } finally {
      set({ loading: false });
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
    localStorage.clear();
    window.location.href = "/";
  },
  setProfile: (profile: LiffProfile) => {
    set({ profile });
  },
}));
