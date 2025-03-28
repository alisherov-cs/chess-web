import { checkPositions } from "@/utils/checkPositions";
import { Color, Piece, Type } from "./piece";
import { Board } from "./board";

export class Bishop extends Piece {
  constructor(
    public color: Color,
    public position: [number, number],
    public file: string
  ) {
    super(color, Type.BISHOP, position, file);
  }

  getValidMoves(board: Board): [number, number][] {
    const [x, y] = this.position;
    const possibleMoves: [number, number][] = [];

    // up-left
    for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
      if (
        board.pieces.some(
          ({ position }) =>
            checkPositions(position, [i, j]) && i !== x && j !== y
        )
      ) {
        break;
      }
      possibleMoves.push([i, j]);
    }

    // up-right
    for (let i = x - 1, j = y + 1; i >= 0 && j <= 8; i--, j++) {
      if (
        board.pieces.some(
          ({ position }) =>
            checkPositions(position, [i, j]) && i !== x && j !== y
        )
      ) {
        break;
      }
      possibleMoves.push([i, j]);
    }

    // down-left
    for (let i = x + 1, j = y - 1; i <= 8 && j >= 0; i++, j--) {
      if (
        board.pieces.some(
          ({ position }) =>
            checkPositions(position, [i, j]) && i !== x && j !== y
        )
      ) {
        break;
      }
      possibleMoves.push([i, j]);
    }

    // down-right
    for (let i = x + 1, j = y + 1; i <= 8 && j <= 8; i++, j++) {
      if (
        board.pieces.some(
          ({ position }) =>
            checkPositions(position, [i, j]) && i !== x && j !== y
        )
      ) {
        break;
      }
      possibleMoves.push([i, j]);
    }

    return possibleMoves;
  }

  getValidCaptures(board: Board): [number, number][] {
    const [x, y] = this.position;
    const possibleCaptures: [number, number][] = [];

    // up-left
    for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [i, j]) &&
            i !== x &&
            j !== y &&
            color !== this.color
        )
      ) {
        possibleCaptures.push([i, j]);
        break;
      }
    }

    // up-right
    for (let i = x - 1, j = y + 1; i >= 0 && j <= 8; i--, j++) {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [i, j]) &&
            i !== x &&
            j !== y &&
            color !== this.color
        )
      ) {
        possibleCaptures.push([i, j]);
        break;
      }
    }

    // down-left
    for (let i = x + 1, j = y - 1; i <= 8 && j >= 0; i++, j--) {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [i, j]) &&
            i !== x &&
            j !== y &&
            color !== this.color
        )
      ) {
        possibleCaptures.push([i, j]);
        break;
      }
    }

    // down-right
    for (let i = x + 1, j = y + 1; i <= 8 && j <= 8; i++, j++) {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [i, j]) &&
            i !== x &&
            j !== y &&
            color !== this.color
        )
      ) {
        possibleCaptures.push([i, j]);
        break;
      }
    }

    return possibleCaptures;
  }
}
