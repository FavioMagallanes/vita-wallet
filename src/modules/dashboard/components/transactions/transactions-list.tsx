import { FC, memo } from "react";
import { Transactions } from ".";
import { TransactionsListResponse } from "@/modules/dashboard/types/transactions-types";
import { TransactionItem } from "./transactions-item";

type TransactionsListProps = {
  transactionList: TransactionsListResponse;
};

export const TransactionsList: FC<TransactionsListProps> = memo(
  ({ transactionList }) => {
    return (
      <Transactions.Transaction>
        <Transactions.Title>Historial</Transactions.Title>
        <Transactions.Content>
          {transactionList.data.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </Transactions.Content>
      </Transactions.Transaction>
    );
  },
);

TransactionsList.displayName = "TransactionsList";
