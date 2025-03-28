import { Board } from "@/rules/board";
import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { ChessSquare } from "./ChessSquare";
import { useActivePiece } from "@/store/useActivePiece";
import { useMemo, useState } from "react";
import { checkPositions } from "@/utils/checkPositions";
import { useOffset } from "@/store/useOffset";
import { useDragState } from "@/store/useDragState";

export const ChessBoard = () => {
  const board = useMemo(() => new Board(), []);
  const [pieces, setPieces] = useState(board.pieces);
  const { active, setActive, clearActive } = useActivePiece();
  const { setOffset } = useOffset();
  const { setDragged } = useDragState();

  const onDragStart = (event: DragStartEvent) => {
    if (
      active &&
      active
        .getValidCaptures(board)
        .some((capture) =>
          checkPositions(capture, event.active.data.current?.position)
        )
    ) {
      return;
    }
    //@ts-ignore
    setOffset(event.activatorEvent?.offsetX, event.activatorEvent?.offsetY);
    if (!active) {
      setActive(event.active.data.current?.piece);
    } else {
      if (
        !checkPositions(active.position, event.active.data.current?.position)
      ) {
        setActive(event.active.data.current?.piece);
      } else {
        clearActive();
      }
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    setDragged(true);
    if (
      active &&
      !checkPositions(active.position, event.active.data.current?.position)
    ) {
      clearActive();
    } else {
      if (
        !checkPositions(
          event.active.data.current?.position,
          event.over?.data.current?.position
        )
      ) {
        clearActive();
      } else {
        !active ? clearActive() : setActive(event.active.data.current?.piece);
      }
    }

    if (
      active
        ?.getValidMoves(board)
        .some((move) =>
          checkPositions(move, event.over?.data.current?.position)
        )
    ) {
      event.active.data.current?.piece?.makeMove(
        board,
        event.over?.data.current?.position
      );
      clearActive();
    }

    if (
      active
        ?.getValidCaptures(board)
        .some((capture) =>
          checkPositions(capture, event.over?.data.current?.position)
        )
    ) {
      event.active.data.current?.piece?.capture(
        board,
        event.over?.data.current?.position
      );
      clearActive();
    }

    setPieces(board.pieces);
  };

  const onDroppableClick = (row: number, col: number) => {
    setDragged(false);
    if (active) {
      if (
        active
          .getValidMoves(board)
          .some((move) => checkPositions(move, [row, col]))
      ) {
        active.makeMove(board, [row, col]);
        setPieces(board.pieces);
      }

      if (
        active
          .getValidCaptures(board)
          .some((capture) => checkPositions(capture, [row, col]))
      ) {
        active.capture(board, [row, col]);
        setPieces(board.pieces);
      }
    }

    if (!pieces.some(({ position }) => checkPositions(position, [row, col]))) {
      clearActive();
    }

    clearActive();
  };

  return (
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div className="grid grid-rows-8 w-[600px] aspect-square select-none">
        {[...Array(8).keys()].map((row) => (
          <div className="grid grid-cols-8" key={row}>
            {[...Array(8).keys()].map((col) => (
              <ChessSquare
                key={`${row}-${col}`}
                row={row}
                col={col}
                board={board}
                pieces={pieces}
                onDroppableClick={onDroppableClick}
              />
            ))}
          </div>
        ))}
      </div>
    </DndContext>
  );
};
