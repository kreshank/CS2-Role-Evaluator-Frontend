
export const getAlignmentColor = (alignment: number): string => {
  if (alignment >= 80) return "text-green-400";
  if (alignment >= 60) return "text-yellow-400";
  if (alignment >= 40) return "text-orange-400";
  return "text-red-400";
};
