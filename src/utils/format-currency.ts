import { CryptoPrices } from "@/modules/exchange/types/crypto-prices-types";

export const formatCurrency = (value: number, decimals: number): string => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};

export const calculateConversion = (
  amount: string,
  from: string,
  to: string,
  cryptoPrices: CryptoPrices | null,
): string => {
  if (!cryptoPrices || !amount) return "0";

  const numericAmount = parseFloat(amount.replace(/[^0-9.]/g, ""));

  if (isNaN(numericAmount)) return "0";

  const fromLower = from.toLowerCase();
  const toLower = to.toLowerCase();

  if (
    !(fromLower in cryptoPrices.prices) ||
    !(toLower in cryptoPrices.prices[fromLower])
  ) {
    console.error(`Invalid currency pair: ${from} to ${to}`);
    return "0";
  }

  const rate = cryptoPrices.prices[fromLower][toLower];
  const result = numericAmount * rate;

  return formatCurrency(result, 8);
};
