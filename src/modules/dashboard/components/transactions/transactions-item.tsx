import { FC, memo, useMemo } from "react";
import { Transactions } from ".";
import { Datum } from "@/modules/dashboard/types/transactions-types";
import { formatAmount, formatDateTime } from "@/utils/formatters";
import { DollarSign } from "lucide-react";

type TransactionItemProps = {
  transaction: Datum;
};

export const TransactionItem: FC<TransactionItemProps> = memo(
  ({ transaction }) => {
    const formattedDateTime = useMemo(
      () => formatDateTime(transaction.attributes.created_at),
      [transaction.attributes.created_at],
    );
    const formattedAmount = useMemo(
      () => formatAmount(transaction.attributes.amount),
      [transaction.attributes.amount],
    );

    const statusColor =
      transaction.attributes.status === "completed"
        ? "text-green-500"
        : "text-red-500";

    return (
      <Transactions.Item>
        <Transactions.Details>
          <Transactions.Icon>
            <DollarSign className={`h-4 w-4 ${statusColor}`} />
          </Transactions.Icon>
          <Transactions.Info>
            <Transactions.MainText>
              {transaction.attributes.description}
            </Transactions.MainText>
            <Transactions.SubText>{formattedDateTime}</Transactions.SubText>
            <Transactions.SubText>{`Estado: ${transaction.attributes.status}`}</Transactions.SubText>
            <Transactions.SubText>{`Destinatario: ${transaction.attributes.recipient?.first_name} ${transaction.attributes.recipient?.last_name}`}</Transactions.SubText>
          </Transactions.Info>
        </Transactions.Details>
        <Transactions.Amount>
          <Transactions.MainText>${formattedAmount}</Transactions.MainText>
          <Transactions.SubText>{`Divisa: ${transaction.attributes.currency.toUpperCase()}`}</Transactions.SubText>
        </Transactions.Amount>
      </Transactions.Item>
    );
  },
);

TransactionItem.displayName = "TransactionItem";
