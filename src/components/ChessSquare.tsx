import { clsx } from "clsx";
import { Board } from "@/rules/board";
import { getCellColor } from "@/utils/colors";
import { LetterIndicators, NumberIndicators } from "@/utils/indicators";
import { getPiece } from "@/utils/pieces";
import { ChessImg } from "./ChessImg";
import { DraggablePiece } from "./DraggablePiece";
import { DroppableSquare } from "./DroppableSquare";
import { checkPositions } from "@/utils/checkPositions";
import { MoveRecommandation } from "./MoveRecommandation";
import { useActivePiece } from "@/store/useActivePiece";
import { Piece } from "@/rules/piece";
import { CaptureRecommandation } from "./CaptureRecommandation";

type ChessSquareProps = {
  row: number;
  col: number;
  board: Board;
  pieces: Piece[];
  onDroppableClick: (row: number, col: number) => void;
};

export const ChessSquare = ({
  row,
  col,
  board,
  pieces,
  onDroppableClick,
}: ChessSquareProps) => {
  const { active } = useActivePiece();

  return (
    <DroppableSquare
      row={row}
      col={col}
      onClick={() => onDroppableClick(row, col)}
      className={clsx(
        "relative",
        active && checkPositions(active.position, [row, col])
          ? "bg-active"
          : getCellColor(row, col)
      )}
    >
      {active &&
        active
          .getValidMoves(board)
          .some((move) => checkPositions(move, [row, col])) && (
          <MoveRecommandation />
        )}
      {active &&
        active
          .getValidCaptures(board)
          .some((capture) => checkPositions(capture, [row, col])) && (
          <CaptureRecommandation />
        )}
      <NumberIndicators row={row} col={col} />
      <LetterIndicators row={row} col={col} />
      {pieces.some(({ position }) => checkPositions(position, [row, col])) && (
        <DraggablePiece piece={getPiece(board, row, col)!} row={row} col={col}>
          <ChessImg
            piece={
              pieces.find(({ position }) =>
                checkPositions(position, [row, col])
              )!
            }
          />
        </DraggablePiece>
      )}
    </DroppableSquare>
  );
};
