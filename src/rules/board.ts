import { Bishop } from "./bishop";
import { King } from "./king";
import { Knight } from "./knight";
import { Pawn } from "./pawn";
import { Color, Piece } from "./piece";
import { Queen } from "./queen";
import { Rook } from "./rook";

export class Board {
  constructor() {}

  public pieces: Piece[] = [
    new Pawn(Color.WHITE, [6, 0], "/wp.png"),
    new Pawn(Color.WHITE, [6, 1], "/wp.png"),
    new Pawn(Color.WHITE, [6, 2], "/wp.png"),
    new Pawn(Color.WHITE, [6, 3], "/wp.png"),
    new Pawn(Color.WHITE, [6, 4], "/wp.png"),
    new Pawn(Color.WHITE, [6, 5], "/wp.png"),
    new Pawn(Color.WHITE, [6, 6], "/wp.png"),
    new Pawn(Color.WHITE, [6, 7], "/wp.png"),
    new Rook(Color.WHITE, [7, 0], "/wr.png"),
    new Rook(Color.WHITE, [7, 7], "/wr.png"),
    new Knight(Color.WHITE, [7, 1], "/wn.png"),
    new Knight(Color.WHITE, [7, 6], "/wn.png"),
    new Bishop(Color.WHITE, [7, 2], "/wb.png"),
    new Bishop(Color.WHITE, [7, 5], "/wb.png"),
    new Queen(Color.WHITE, [7, 3], "/wq.png"),
    new King(Color.WHITE, [7, 4], "/wk.png"),

    new Pawn(Color.BLACK, [1, 0], "/bp.png"),
    new Pawn(Color.BLACK, [1, 1], "/bp.png"),
    new Pawn(Color.BLACK, [1, 2], "/bp.png"),
    new Pawn(Color.BLACK, [1, 3], "/bp.png"),
    new Pawn(Color.BLACK, [1, 4], "/bp.png"),
    new Pawn(Color.BLACK, [1, 5], "/bp.png"),
    new Pawn(Color.BLACK, [1, 6], "/bp.png"),
    new Pawn(Color.BLACK, [1, 7], "/bp.png"),
    new Rook(Color.BLACK, [0, 0], "/br.png"),
    new Rook(Color.BLACK, [0, 7], "/br.png"),
    new Knight(Color.BLACK, [0, 1], "/bn.png"),
    new Knight(Color.BLACK, [0, 6], "/bn.png"),
    new Bishop(Color.BLACK, [0, 2], "/bb.png"),
    new Bishop(Color.BLACK, [0, 5], "/bb.png"),
    new Queen(Color.BLACK, [0, 3], "/bq.png"),
    new King(Color.BLACK, [0, 4], "/bk.png"),
  ];

  public updateBoard(newBoard: Piece[]) {
    this.pieces = newBoard;
  }
}
