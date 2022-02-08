export const truncateText = (text: string) => {
  if (text.length > 280) {
    return text.slice(0, 277) + "...";
  }
  return text;
};
