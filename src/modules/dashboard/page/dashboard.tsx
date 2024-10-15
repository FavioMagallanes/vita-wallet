import { useProfile } from "@/modules/dashboard/hooks/use-profile";
import { Balance } from "../components/balance/balance";
import { TransactionsList } from "../components/transactions/transactions-list";
import { useTransactionsList } from "../hooks/use-transactions-list";
import { Loader } from "lucide-react";

export const Dashboard = () => {
  const { data: transactionList, isLoading, error } = useTransactionsList();
  const { data: userProfile } = useProfile();

  console.log("transactionList", transactionList);

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="h-10 w-10 animate-spin text-[#05bcb9]" />
      </div>
    );

  if (error)
    return (
      <div
        className="flex h-screen items-center justify-center text-center"
        data-testid="error"
      >
        <h3
          className="text-xl font-semibold text-[#05bcb9] dark:text-blue-300"
          data-testid="error-message"
        >
          Ups! Algo salió mal, por favor recarga la página.
        </h3>
      </div>
    );

  return (
    <div className="flex-col space-y-5">
      {userProfile?.data && <Balance userProfile={userProfile.data} />}
      {transactionList && (
        <TransactionsList transactionList={transactionList} />
      )}
    </div>
  );
};
