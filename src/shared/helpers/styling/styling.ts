export const pixelify = (
  value?: number | string
): number | string | undefined =>
  typeof value === "number" ? `${value}px` : value;
