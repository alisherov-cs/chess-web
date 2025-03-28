import { checkPositions } from "@/utils/checkPositions";
import { Color, Piece, Type } from "./piece";
import { Board } from "./board";

export class King extends Piece {
  constructor(
    public color: Color,
    public position: [number, number],
    public file: string
  ) {
    super(color, Type.KING, position, file);
  }

  getValidMoves(board: Board): [number, number][] {
    const [x, y] = this.position;
    const possibleMoves: [number, number][] = [];

    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (
          board.pieces.some(({ position }) =>
            checkPositions(position, [i, j])
          ) ||
          (i === x && j === y)
        ) {
          continue;
        }
        possibleMoves.push([i, j]);
      }
    }

    return possibleMoves;
  }

  getValidCaptures(board: Board): [number, number][] {
    const [x, y] = this.position;
    const possibleCaptures: [number, number][] = [];

    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (
          board.pieces.some(
            ({ position, color }) =>
              checkPositions(position, [i, j]) &&
              !checkPositions(position, [x, y]) &&
              color !== this.color
          )
        ) {
          possibleCaptures.push([i, j]);
        }
      }
    }

    return possibleCaptures;
  }
}
