export const numberWithComma = (number: string | number) => {
  const str = number.toString();
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
