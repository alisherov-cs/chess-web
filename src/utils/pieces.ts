import { Board } from "@/rules/board";

export const getPiece = (board: Board, row: number, col: number) => {
  return board.pieces.find(
    ({ position }) => position[0] === row && position[1] === col
  );
};
