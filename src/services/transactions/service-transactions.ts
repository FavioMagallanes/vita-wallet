import { api } from "@/config/axios/axios-instance";
import { TransactionsListResponse } from "@/modules/dashboard/types/transactions-types";

export const getTransactionsList =
  async (): Promise<TransactionsListResponse> => {
    try {
      const response = await api.get<TransactionsListResponse>("/transactions");
      return response.data;
    } catch (error) {
      console.error("Error fetching transactions list:", error);
      throw error;
    }
  };
