const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", options);
};
