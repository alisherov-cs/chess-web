import { create } from "zustand";

type DragState = {
  dragged: boolean;
  setDragged: (dragged: boolean) => void;
};

export const useDragState = create<DragState>((set) => ({
  dragged: false,
  setDragged: (dragged: boolean) => set({ dragged }),
}));
