import React, { FC, useMemo } from "react";
import { DollarSign } from "lucide-react";
import { Transactions } from "./transactions";
import {
  TransactionsListResponse,
  Datum,
} from "@/modules/dashboard/types/transactions-types";
import { formatAmount, formatDate } from "@/utils/formatters";

type TransactionsListProps = {
  transactionList: TransactionsListResponse;
};

const TransactionItem: FC<{ transaction: Datum }> = React.memo(
  ({ transaction }) => {
    const formattedDate = useMemo(
      () => formatDate(transaction.attributes.created_at),
      [transaction.attributes.created_at],
    );
    const formattedAmount = useMemo(
      () => formatAmount(transaction.attributes.amount),
      [transaction.attributes.amount],
    );

    return (
      <Transactions.Item>
        <Transactions.Details>
          <Transactions.Icon>
            <DollarSign className="h-4 w-4 text-[#05bcb9] dark:text-blue-300" />
          </Transactions.Icon>
          <Transactions.Info>
            <Transactions.MainText>
              {transaction.attributes.description}
            </Transactions.MainText>
            <Transactions.SubText>{formattedDate}</Transactions.SubText>
          </Transactions.Info>
        </Transactions.Details>
        <Transactions.Amount>
          <Transactions.SubText>
            {transaction.attributes.currency}
          </Transactions.SubText>
          <Transactions.MainText>${formattedAmount}</Transactions.MainText>
          <Transactions.SubText>
            {transaction.attributes.exchange_currency}
          </Transactions.SubText>
        </Transactions.Amount>
      </Transactions.Item>
    );
  },
);

TransactionItem.displayName = "TransactionItem";

export const TransactionsList: FC<TransactionsListProps> = React.memo(
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
