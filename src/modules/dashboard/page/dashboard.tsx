import { Balance } from "../components/balance";
import TransactionsList from "../components/transactions-list";

export const Dashboard = () => {
  return (
    <div className="flex-col space-y-5">
      <Balance />
      <TransactionsList />
    </div>
  );
};
