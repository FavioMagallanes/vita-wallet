import { api } from "@/config/axios/axios-instance";
import { PriceResponse } from "@/modules/exchange/types/crypto-prices-types";

export const getCryptoMultiPrices = async (): Promise<PriceResponse> => {
  try {
    const response = await api.get<PriceResponse>(
      "/users/get_crypto_multi_prices",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    throw error;
  }
};
