import { clsx } from "clsx";
import { useDroppable } from "@dnd-kit/core";
import type { ReactNode } from "react";

type DroppableSquareProps = {
  row: number;
  col: number;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const DroppableSquare = ({
  row,
  col,
  children,
  className,
  onClick,
}: DroppableSquareProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${row}-${col}`,
    data: { position: [row, col] },
  });

  return (
    <div
      onClick={onClick}
      ref={setNodeRef}
      className={clsx("relative flex items-center justify-center", className)}
    >
      {isOver && (
        <div className="absolute top-0 left-0 w-full h-full border-4 border-white/75" />
      )}
      {children}
    </div>
  );
};
