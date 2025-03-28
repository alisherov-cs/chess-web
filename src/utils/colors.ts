export const getCellColor = (row: number, col: number) => {
  if (row % 2 === 0) {
    if (col % 2 === 0) {
      return "bg-secondary text-primary";
    } else {
      return "bg-primary text-secondary";
    }
  } else {
    if (col % 2 === 0) {
      return "bg-primary text-secondary";
    } else {
      return "bg-secondary text-primary";
    }
  }
};
