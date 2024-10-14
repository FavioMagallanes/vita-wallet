export const formatDate = (date: Date) => {
  return date.toLocaleString();
};

export const formatAmount = (amount: string) => {
  return Number(amount).toLocaleString();
};
