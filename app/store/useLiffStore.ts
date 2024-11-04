import { create } from "zustand";
import liff from "@line/liff";

interface LiffProfile {
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
      await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! }).then(() => {
        if (liff.isLoggedIn()) {
          liff
            .getProfile()
            .then(async (profile) => {
              set({
                isLoggedIn: true,
                profile,
              });

              const data = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users?userId=${profile.userId}`,
                {
                  method: "GET",
                }
              ).then((response) => response.json());

              if (!data) {
                fetch("api/users/", {
                  method: "POST",
                  headers: {
                    "Content-Type":
                      "application/json,application/x-www-form-urlencoded",
                  },
                  body: JSON.stringify({
                    userId: profile.userId,
                    displayName: profile.displayName,
                    pictureUrl: profile.pictureUrl,
                    shopName: "หลังขรรค์ชัย",
                    phoneNumber: "123-456-7890",
                    address: "1234 ��า��า��ลา��น้ำ, สะเดา",
                  }),
                });
              } else {
                set({
                  isLoggedIn: true,
                  profile: data,
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
    window.location.href = "/";
  },
}));
