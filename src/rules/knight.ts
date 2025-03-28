import { checkPositions } from "@/utils/checkPositions";
import { Color, Piece, Type } from "./piece";
import { Board } from "./board";

export class Knight extends Piece {
  constructor(
    public color: Color,
    public position: [number, number],
    public file: string
  ) {
    super(color, Type.KNIGHT, position, file);
  }

  getValidMoves(board: Board): [number, number][] {
    const [x, y] = this.position;
    const possibleMoves: [number, number][] = [];

    // up
    [1, -1].forEach((i) => {
      if (
        !board.pieces.some(({ position }) =>
          checkPositions(position, [x - 2, y - i])
        )
      ) {
        possibleMoves.push([x - 2, y - i]);
      }
    });

    // down
    [1, -1].forEach((i) => {
      if (
        !board.pieces.some(({ position }) =>
          checkPositions(position, [x + 2, y - i])
        )
      ) {
        possibleMoves.push([x + 2, y - i]);
      }
    });

    // left
    [1, -1].forEach((i) => {
      if (
        !board.pieces.some(({ position }) =>
          checkPositions(position, [x - i, y - 2])
        )
      ) {
        possibleMoves.push([x - i, y - 2]);
      }
    });

    // right
    [1, -1].forEach((i) => {
      if (
        !board.pieces.some(({ position }) =>
          checkPositions(position, [x - i, y + 2])
        )
      ) {
        possibleMoves.push([x - i, y + 2]);
      }
    });

    return possibleMoves;
  }

  getValidCaptures(board: Board): [number, number][] {
    const [x, y] = this.position;
    const possibleCaptures: [number, number][] = [];

    // up
    [1, -1].forEach((i) => {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [x - 2, y - i]) && this.color !== color
        )
      ) {
        possibleCaptures.push([x - 2, y - i]);
      }
    });

    // down
    [1, -1].forEach((i) => {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [x + 2, y - i]) && this.color !== color
        )
      ) {
        possibleCaptures.push([x + 2, y - i]);
      }
    });

    // left
    [1, -1].forEach((i) => {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [x - i, y - 2]) && this.color !== color
        )
      ) {
        possibleCaptures.push([x - i, y - 2]);
      }
    });

    // right
    [1, -1].forEach((i) => {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [x - i, y + 2]) && this.color !== color
        )
      ) {
        possibleCaptures.push([x - i, y + 2]);
      }
    });

    return possibleCaptures;
  }
}
