import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CurrencyOption } from "../types/crypto-prices-types";

type CurrencySelectProps = {
  value: string;
  onValueChange: (value: string) => void;
  options: CurrencyOption[];
};

export const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value,
  onValueChange,
  options,
}) => (
  <Select value={value} onValueChange={onValueChange}>
    <SelectTrigger className="w-[100px] rounded-r-none">
      <SelectValue>
        <div className="flex items-center">
          <img
            src={options.find((option) => option.value === value)?.icon}
            alt={`${value} icon`}
            className="mr-2 h-5 w-5 rounded"
          />
          <span className="text-xs">{value}</span>
        </div>
      </SelectValue>
    </SelectTrigger>
    <SelectContent>
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value} className="text-xs">
          <div className="flex items-center">
            <img
              src={option.icon}
              alt={`${option.value} icon`}
              className="mr-2 h-5 w-5 rounded"
            />
            <span className="text-xs">{option.value}</span>
          </div>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);
