import { FC } from "react";
import { useExchangeForm } from "../hooks/use-exchange-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CurrencySelect } from "./currency-select";
import { ExchangeSummary } from "./exchange-summary";
import { CurrencyOption } from "../types/crypto-prices-types";

export const ExchangeForm: FC = () => {
  const navigate = useNavigate();
  const {
    isModalOpen,
    setIsModalOpen,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    // setToCurrency,
    fromAmount,
    toAmount,
    showSummary,
    handleConfirm,
    handleContinue,
    handleBack,
    handleFromAmountChange,
    handleBlur,
    handleToCurrencyChange,
  } = useExchangeForm();

  const handleBackNavigation = () => {
    if (showSummary) return handleBack();
    navigate("/dashboard");
  };

  const fromCurrencyOptions: CurrencyOption[] = [
    { value: "USD", icon: "/public/icons/eeuu-flag.png" },
  ];

  const toCurrencyOptions: CurrencyOption[] = [
    { value: "BTC", icon: "/public/icons/btc.svg" },
    { value: "USDT", icon: "/public/icons/usdt.svg" },
    { value: "USDC", icon: "/public/icons/usdc.svg" },
  ];

  return (
    <>
      <div className="mt-6 w-1/2 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        {!showSummary && (
          <>
            <h2 className="mb-4 text-2xl font-bold">
              ¿Qué deseas intercambiar?
            </h2>
            <p className="mb-6 text-sm text-[#05bcb9]">
              Saldo disponible: $ 900.000,00 USD
            </p>
          </>
        )}

        {!showSummary ? (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="from-amount"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Monto a intercambiar
              </label>
              <div className="flex w-96 gap-1.5">
                <CurrencySelect
                  value={fromCurrency}
                  onValueChange={setFromCurrency}
                  options={fromCurrencyOptions}
                />
                <Input
                  id="from-amount"
                  type="text"
                  placeholder="Enter amount"
                  className="flex-1 rounded-l-none"
                  value={fromAmount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleFromAmountChange(e.target.value)
                  }
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="to-amount"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Quiero recibir
              </label>
              <div className="flex w-96 gap-1.5">
                <CurrencySelect
                  value={toCurrency}
                  onValueChange={handleToCurrencyChange}
                  options={toCurrencyOptions}
                />
                <Input
                  id="to-amount"
                  type="text"
                  placeholder="Estimated amount"
                  className="flex-1 rounded-l-none"
                  value={toAmount}
                  readOnly
                />
              </div>
            </div>
          </div>
        ) : (
          <ExchangeSummary
            fromAmount={fromAmount}
            fromCurrency={fromCurrency}
            toAmount={toAmount}
            toCurrency={toCurrency}
            onConfirm={handleConfirm}
            onBack={handleBack}
            error={null}
          />
        )}
        <div className="mt-20 flex gap-2">
          <Button variant="outline" onClick={handleBackNavigation}>
            Atrás
          </Button>
          {!showSummary ? (
            <Button className="btn-gradient" onClick={handleContinue}>
              Continuar
            </Button>
          ) : (
            <Button className="btn-gradient" onClick={handleConfirm}>
              Intercambiar
            </Button>
          )}
        </div>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img src="/public/modal-img.svg" alt="modal image" />
                <DialogTitle className="bg-gradient-to-r from-[#06b5b4] to-[#16768a] bg-clip-text text-2xl font-extrabold text-transparent">
                  ¡Intercambio exitoso!
                </DialogTitle>
                <DialogFooter className="text-lg">
                  Ya cuentas con tus {toCurrency} en tu saldo.
                </DialogFooter>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
