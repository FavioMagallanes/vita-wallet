import { api } from "@/config/axios/axios-instance";

export type ExchangeResponse = {
  data: null;
};

export const postExchange = async (
  fromCurrency: string,
  toCurrency: string,
  amountSent: number,
): Promise<ExchangeResponse> => {
  try {
    const response = await api.post(
      "https://api.qa.vitawallet.io/api/transactions/exchange",
      {
        currency_sent: fromCurrency.toLowerCase(),
        currency_received: toCurrency.toLowerCase(),
        amount_sent: amountSent,
      },
    );

    if (response.status === 201) {
      return response.data;
    }

    throw new Error("Error in exchange process");
  } catch (error) {
    console.error("Error during exchange:", error);
    throw new Error("Failed to perform the exchange");
  }
};
