import clsx from "clsx";

export type TGrid = {
  row: number;
  col: number;
};

export const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const NumberIndicators = ({ row, col }: TGrid) => {
  return (
    col === 0 && (
      <span className="absolute top-1 left-1 select-none">{8 - row}</span>
    )
  );
};

export const LetterIndicators = ({ row, col }: TGrid) => {
  return (
    row === 7 && (
      <span className={clsx("absolute bottom-1 right-1 select-none")}>
        {letters[col]}
      </span>
    )
  );
};
