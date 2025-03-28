import { clsx } from "clsx";
import { useDraggable } from "@dnd-kit/core";
import { ReactNode, useMemo } from "react";
import { Piece } from "@/rules/piece";
import { useActivePiece } from "@/store/useActivePiece";
import { checkPositions } from "@/utils/checkPositions";
import { useOffset } from "@/store/useOffset";

type DraggablePieceProps = {
  row: number;
  col: number;
  piece: Piece;
  children: ReactNode;
  className?: string;
};

export const DraggablePiece = ({
  row,
  col,
  piece,
  children,
  className,
}: DraggablePieceProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${row}-${col}`,
    data: { position: [row, col], piece },
  });

  const { active } = useActivePiece();
  const {
    offset: { x, y },
  } = useOffset();

  const offsetX = useMemo(() => (x || 0) - 75 / 2, [x]);
  const offsetY = useMemo(() => (y || 0) - 75 / 2, [y]);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={clsx(
        "absolute w-full h-full flex justify-center items-center cursor-grab",
        active && checkPositions(active.position, [row, col]) ? "z-50" : "z-40",
        className
      )}
      style={{
        transform: transform
          ? `translate(${transform.x + offsetX}px, ${transform.y + offsetY}px)`
          : undefined,
      }}
    >
      {children}
    </div>
  );
};
