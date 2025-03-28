import { create } from "zustand";

type Offset = {
  offset: {
    x: number | null;
    y: number | null;
  };
  setOffset: (x: number | null, y: number | null) => void;
};

export const useOffset = create<Offset>((set) => ({
  offset: {
    x: null,
    y: null,
  },
  setOffset: (x: number | null, y: number | null) => set({ offset: { x, y } }),
}));
