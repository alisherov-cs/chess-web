import { checkPositions } from "@/utils/checkPositions";
import { Board } from "./board";
import { Color, Piece, Type } from "./piece";

export class Rook extends Piece {
  constructor(
    public color: Color,
    public position: [number, number],
    public file: string
  ) {
    super(color, Type.ROOK, position, file);
  }

  getValidMoves(board: Board): [number, number][] {
    const [x, y] = this.position;
    const possibleMoves: [number, number][] = [];

    // up
    for (let i = x - 1; i >= 0; i--) {
      if (
        board.pieces.some(
          ({ position }) => checkPositions(position, [i, y]) && i !== x
        )
      ) {
        break;
      }
      possibleMoves.push([i, y]);
    }

    // down
    for (let i = x + 1; i <= 8; i++) {
      if (
        board.pieces.some(
          ({ position }) => checkPositions(position, [i, y]) && i !== x
        )
      ) {
        break;
      }
      possibleMoves.push([i, y]);
    }

    // right
    for (let i = y + 1; i <= 8; i++) {
      if (
        board.pieces.some(
          ({ position }) => checkPositions(position, [x, i]) && i !== y
        )
      ) {
        break;
      }
      possibleMoves.push([x, i]);
    }

    // left
    for (let i = y - 1; i >= 0; i--) {
      if (
        board.pieces.some(
          ({ position }) => checkPositions(position, [x, i]) && i !== y
        )
      ) {
        break;
      }
      possibleMoves.push([x, i]);
    }

    return possibleMoves;
  }

  getValidCaptures(board: Board): [number, number][] {
    const [x, y] = this.position;
    const possibleCaptures: [number, number][] = [];

    // up
    for (let i = x - 1; i >= 0; i--) {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [i, y]) && i !== x && this.color === color
        )
      ) {
        break;
      }
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [i, y]) && i !== x && this.color !== color
        )
      ) {
        possibleCaptures.push([i, y]);
        break;
      }
    }

    // down
    for (let i = x + 1; i <= 8; i++) {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [i, y]) && i !== x && this.color === color
        )
      ) {
        break;
      }
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [i, y]) && i !== x && this.color !== color
        )
      ) {
        possibleCaptures.push([i, y]);
        break;
      }
    }

    // right
    for (let i = y + 1; i < 8; i++) {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [x, i]) && i !== y && this.color === color
        )
      ) {
        break;
      }
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [x, i]) && i !== y && this.color !== color
        )
      ) {
        possibleCaptures.push([x, i]);
        break;
      }
    }

    // left
    for (let i = y - 1; i >= 0; i--) {
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [x, i]) && i !== y && this.color === color
        )
      ) {
        break;
      }
      if (
        board.pieces.some(
          ({ position, color }) =>
            checkPositions(position, [x, i]) && i !== y && this.color !== color
        )
      ) {
        possibleCaptures.push([x, i]);
        break;
      }
    }

    return possibleCaptures;
  }
}
