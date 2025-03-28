import { checkPositions } from "@/utils/checkPositions";
import { Board } from "./board";
import { Color, Piece, Type } from "./piece";
import { addDirection } from "@/utils/addDirection";

export class Pawn extends Piece {
  constructor(
    public color: Color,
    public position: [number, number],
    public file: string
  ) {
    super(color, Type.PAWN, position, file);
  }

  getValidMoves(board: Board): [number, number][] {
    const [x, y] = this.position;
    const possibleMoves: [number, number][] = [
      [this.color === Color.WHITE ? x - 1 : x + 1, y],
      [this.color === Color.WHITE ? x - 2 : x + 2, y],
    ];

    if (this.hasMoved) {
      return board.pieces.some(({ position }) =>
        checkPositions(position, possibleMoves[0])
      )
        ? []
        : [possibleMoves[0]];
    }

    return possibleMoves.filter(
      (move) =>
        !board.pieces.some(({ position }) => checkPositions(position, move))
    );
  }

  getValidCaptures(board: Board): [number, number][] {
    const [x, y] = this.position;
    const possibleCaptures: [number, number][] = [
      [addDirection(this.color, x, 1), y + 1],
      [addDirection(this.color, x, 1), y - 1],
    ];

    return possibleCaptures.filter((capture) =>
      board.pieces.some(
        ({ position, color }) =>
          checkPositions(position, capture) && color !== this.color
      )
    );
  }
}
