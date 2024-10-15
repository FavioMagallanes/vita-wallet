import { getTransactionsList } from "@/services/transactions/service-transactions";
import { useQuery } from "@tanstack/react-query";

export const useTransactionsList = () => {
  return useQuery({
    queryKey: ["transactionsList"],
    queryFn: getTransactionsList,
    refetchOnWindowFocus: false,
  });
};
