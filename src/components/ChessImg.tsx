import { Piece } from "@/rules/piece";
import { useDragState } from "@/store/useDragState";
import { motion } from "framer-motion";

type ChessImgProps = {
  piece: Piece;
};

export const ChessImg = ({ piece }: ChessImgProps) => {
  const { dragged } = useDragState();

  return (
    <motion.img
      initial={
        !dragged && {
          x: (piece.previousPosition?.[1] - piece.position?.[1]) * 75,
          y: (piece.previousPosition?.[0] - piece.position?.[0]) * 75,
        }
      }
      animate={!dragged && { x: 0, y: 0 }}
      transition={{ ease: "linear", duration: 0.2 }}
      src={piece?.file}
      alt={piece?.type}
    />
  );
};
