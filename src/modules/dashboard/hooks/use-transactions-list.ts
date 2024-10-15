import { useEffect, useState } from "react";
import { TransactionsListResponse } from "@/modules/dashboard/types/transactions-types";
import { getTransactionsList } from "@/services/transactions/service-transactions";

export const useTransactionsList = () => {
  const [data, setData] = useState<TransactionsListResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getTransactionsList();
        setData(response);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch transactions");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};
