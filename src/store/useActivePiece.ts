import { Piece } from "@/rules/piece";
import { create } from "zustand";

type ActivePiece = {
  active?: Piece;
  setActive: (piece: Piece) => void;
  clearActive: () => void;
};

export const useActivePiece = create<ActivePiece>((set) => ({
  active: undefined,
  setActive: (piece: Piece) => set({ active: piece }),
  clearActive: () => set({ active: undefined }),
}));
