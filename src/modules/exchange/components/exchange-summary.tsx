import { Alert, AlertDescription } from "@/components/ui/alert";
import { FC } from "react";

type ExchangeSummaryProps = {
  fromAmount: string;
  fromCurrency: string;
  toAmount: string;
  toCurrency: string;
  onConfirm: () => Promise<void>;
  onBack: () => void;
  error: string | null;
};

export const ExchangeSummary: FC<ExchangeSummaryProps> = ({
  fromAmount,
  fromCurrency,
  toAmount,
  toCurrency,
  error,
}) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold">Resumen de la transacción</h3>
    {error && (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Monto a intercambiar
        </p>
        <p className="text-balance font-medium">
          {fromAmount} {fromCurrency}
        </p>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Monto a recibir
        </p>
        <p className="text-balance font-medium">
          {toAmount} {toCurrency}
        </p>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Tasa de cambio
        </p>
        <p className="text-balance font-medium">
          1 {fromCurrency} ={" "}
          {(
            parseFloat(toAmount) /
            parseFloat(fromAmount.replace(".", "").replace(",", "."))
          ).toFixed(8)}{" "}
          {toCurrency}
        </p>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Comisión
        </p>
        <p className="text-balance font-semibold">
          {parseFloat(toAmount) * 0.001}% {toCurrency}
        </p>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Total a recibir
        </p>
        <p className="text-balance font-medium text-[#06b5b4]">
          {(parseFloat(toAmount) - parseFloat(toAmount) * 0.001).toFixed(8)}{" "}
          {toCurrency}
        </p>
      </div>
    </div>
  </div>
);
