import { FC } from "react";
import { DollarSign } from "lucide-react";
import { Transactions } from "./transactions";

const TransactionsList: FC = () => {
  return (
    <Transactions.Transaction>
      <Transactions.Title>Historial</Transactions.Title>
      <Transactions.Content>
        {[1, 2, 3, 4].map((i) => (
          <Transactions.Item key={i}>
            <Transactions.Details>
              <Transactions.Icon>
                <DollarSign className="h-4 w-4 text-[#05bcb9] dark:text-blue-300" />
              </Transactions.Icon>
              <Transactions.Info>
                <Transactions.MainText>Transferiste</Transactions.MainText>
                <Transactions.SubText>{`2023-06-${15 + i}`}</Transactions.SubText>
              </Transactions.Info>
            </Transactions.Details>
            <Transactions.Amount>
              <Transactions.MainText>{`+0.0${5 - i} BTC`}</Transactions.MainText>
              <Transactions.SubText>{`$1,${234 + i * 100}`}</Transactions.SubText>
            </Transactions.Amount>
          </Transactions.Item>
        ))}
      </Transactions.Content>
    </Transactions.Transaction>
  );
};

export default TransactionsList;
