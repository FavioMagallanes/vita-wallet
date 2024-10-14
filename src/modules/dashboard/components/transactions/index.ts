import { ReactNode } from "react";
import { Transaction } from "./transaction";
import { Content } from "./content";
import { Title } from "./title";
import { Details } from "./details";
import { Amount } from "./amount";
import { Icon } from "./icon";
import { Info } from "./info";
import { Item } from "./item";
import { MainText } from "./main-text";
import { SubText } from "./sub-text";

interface ComponentWithChildren {
  children: ReactNode;
}

export const Transactions = {
  Transaction: Transaction as React.FC<ComponentWithChildren>,
  Content: Content as React.FC<ComponentWithChildren>,
  Title: Title as React.FC<ComponentWithChildren>,
  Details: Details as React.FC<ComponentWithChildren>,
  Amount: Amount as React.FC<ComponentWithChildren>,
  Icon: Icon as React.FC<ComponentWithChildren>,
  Info: Info as React.FC<ComponentWithChildren>,
  Item: Item as React.FC<ComponentWithChildren>,
  MainText: MainText as React.FC<ComponentWithChildren>,
  SubText: SubText as React.FC<ComponentWithChildren>,
};
