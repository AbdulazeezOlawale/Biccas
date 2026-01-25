import { create } from "zustand";

export type scrollState = {
  hidden: boolean;
  scrollY: number;
  setScrollY: (scrollY: number) => void;
  setHidden: (hidden: boolean | ((prev: boolean) => boolean)) => void;
};

export const useScrollStore = create<scrollState>((set) => ({
  hidden: false,
  scrollY: 0,
  setScrollY: (scrollY) => set({ scrollY }),
  setHidden: (updater) =>
    set((state) => ({
      hidden: typeof updater === "function" ? updater(state.hidden) : updater,
    })),
}));
