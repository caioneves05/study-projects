export const calculatePages = (amountData, amountDataRequest) => {
  const pages = amountData / amountDataRequest;
  const roundedPages = Math.ceil(pages);
  return roundedPages;
};
