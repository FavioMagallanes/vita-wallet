export type CryptoPrice = {
  usd: number;
  usd_sell: number;
  btc_min_total_send_external: number;
  btc_fee_send_external: number;
  usdt_fee_send_external: number;
  usdc_fee_send_external: number;
  usdc: number;
  usdc_sell: number;
  usdt: number;
  usdt_sell: number;
};

export type PriceData = {
  btc: CryptoPrice;
  usd: CryptoPrice;
  usdt: CryptoPrice;
  usdc: CryptoPrice;
};

export type PriceResponse = {
  prices: PriceData;
  valid_until: string;
};

export type CryptoPrices = {
  prices: {
    [key: string]: {
      [key: string]: number;
    };
  };
};

export type CurrencyOption = {
  value: string;
  icon: string;
};
