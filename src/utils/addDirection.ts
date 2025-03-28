import { Color } from "@/rules/piece";

export const addDirection = (
  color: Color,
  coordinate: number,
  step: number
) => {
  return color === Color.WHITE ? coordinate - step : coordinate + step;
};
