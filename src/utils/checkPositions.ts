export const checkPositions = (
  [xA, yA]: [number, number],
  [xB, yB]: [number, number]
) => {
  return xA === xB && yA === yB;
};
