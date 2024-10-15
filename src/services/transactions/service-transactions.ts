import { api } from "@/config/axios/axios-instance";
import { TransactionsListResponse } from "@/modules/dashboard/types/transactions-types";

export const getTransactionsList =
  async (): Promise<TransactionsListResponse> => {
    try {
      const response = await api.get<TransactionsListResponse>("/transactions");
      const sortedTransactions = response.data.data.sort((a, b) => {
        return (
          new Date(b.attributes.created_at).getTime() -
          new Date(a.attributes.created_at).getTime()
        );
      });

      return { ...response.data, data: sortedTransactions };
    } catch (error) {
      console.error("Error fetching transactions list:", error);
      throw error;
    }
  };
