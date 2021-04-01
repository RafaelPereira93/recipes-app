export const excerptDescriptionHome = (text) => {
  const textLength = text.length;

  return textLength > 130 ? (text = `${text.slice(0, 130)} ...`) : text;
};
