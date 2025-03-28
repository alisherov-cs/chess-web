import { checkPositions } from "@/utils/checkPositions";
import { Board } from "./board";

export enum Color {
  WHITE = "white",
  BLACK = "black",
}

export enum Type {
  PAWN = "pawn",
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  QUEEN = "queen",
  KING = "king",
}

export class Piece {
  public hasMoved = false;

  constructor(
    public color: Color,
    public type: Type,
    public position: [number, number],
    public file: string
  ) {}

  public previousPosition: [number, number] = this.position;
  public value: number = this.getPieceValue();

  private getPieceValue(): number {
    const values: Record<Type, number> = {
      [Type.PAWN]: 1,
      [Type.KNIGHT]: 3,
      [Type.BISHOP]: 3,
      [Type.ROOK]: 5,
      [Type.QUEEN]: 9,
      [Type.KING]: Infinity,
    };
    return values[this.type];
  }

  makeMove(board: Board, newPosition: [number, number]) {
    const validMoves = this.getValidMoves(board);

    if (validMoves.some((position) => checkPositions(position, newPosition))) {
      this.previousPosition = this.position;
      this.position = newPosition;
      this.hasMoved = true;
    }
  }

  capture(board: Board, newPosition: [number, number]) {
    const validCaptures = this.getValidCaptures(board);

    if (
      validCaptures.some((position) => checkPositions(position, newPosition))
    ) {
      board.updateBoard(
        board.pieces.filter(
          ({ position }) => !checkPositions(position, newPosition)
        )
      );
      this.previousPosition = this.position;
      this.position = newPosition;
      this.hasMoved = true;
    }
  }

  getValidMoves(_: Board): [number, number][] {
    return [];
  }

  getValidCaptures(_: Board): [number, number][] {
    return [];
  }
}
