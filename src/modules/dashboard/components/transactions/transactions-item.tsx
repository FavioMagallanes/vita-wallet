import { FC, memo, useMemo } from "react";
import { Transactions } from ".";
import { Datum } from "@/modules/dashboard/types/transactions-types";
import { formatAmount, formatDate } from "@/utils/formatters";
import { DollarSign } from "lucide-react";

type TransactionItemProps = {
  transaction: Datum;
};

export const TransactionItem: FC<TransactionItemProps> = memo(
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
          <Transactions.MainText>${formattedAmount}</Transactions.MainText>
        </Transactions.Amount>
      </Transactions.Item>
    );
  },
);

TransactionItem.displayName = "TransactionItem";
