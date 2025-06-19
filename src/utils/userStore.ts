import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ILoginApiResult } from "../types/get/LoginType";

interface UserStoreState {
  user: ILoginApiResult | null;
  setUser: (user: ILoginApiResult) => void;
  clearUser: () => void;
}

// Use localStorage for persistence (not sessionStorage)
const useUserStore = create<UserStoreState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-data",
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);

export default useUserStore;
