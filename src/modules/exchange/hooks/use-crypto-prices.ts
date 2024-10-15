import { useQuery } from "@tanstack/react-query";
import { PriceResponse } from "../types/crypto-prices-types";
import { getCryptoMultiPrices } from "@/services/crypto-prices/service-crypto-prices";

export const useCryptoPrices = () => {
  return useQuery<PriceResponse>({
    queryKey: ["cryptoPrices"],
    queryFn: getCryptoMultiPrices,
    staleTime: 1000 * 60 * 5,
  });
};
