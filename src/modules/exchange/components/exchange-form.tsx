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
import { Loader } from "lucide-react";
import { useProfile } from "@/modules/dashboard/hooks/use-profile";

export const ExchangeForm: FC = () => {
  const navigate = useNavigate();
  const {
    isModalOpen,
    setIsModalOpen,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    fromAmount,
    toAmount,
    showSummary,
    handleConfirm,
    handleContinue,
    handleBack,
    handleFromAmountChange,
    handleBlur,
    handleToCurrencyChange,
    error,
    loading,
  } = useExchangeForm();
  const { data: userProfile } = useProfile();
  console.log(userProfile);

  const handleBackNavigation = () => {
    if (showSummary) return handleBack();
    navigate("/dashboard");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
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
            <p className="mb-6 text-sm font-medium text-[#05bcb9]">
              Saldo disponible:
              <span className="font-medium text-zinc-600">
                {" "}
                $
                {userProfile?.data?.attributes.balances?.usd || "No disponible"}
              </span>
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
              {loading ? (
                <div className="flex items-center">
                  <Loader size={20} className="mr-2 animate-spin" />
                  <span> Procesando..</span>
                </div>
              ) : (
                "Confirmar"
              )}
            </Button>
          )}
        </div>
      </div>
      <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img src="/public/modal-img.svg" alt="modal image" />
                <DialogDescription className="bg-gradient-to-r from-[#06b5b4] to-[#16768a] bg-clip-text text-2xl font-extrabold text-transparent">
                  {error
                    ? "Hubo un error al intercambiar"
                    : "¡Intercambio exitoso!"}
                </DialogDescription>
                <DialogFooter className="text-lg">
                  {error
                    ? "Por favor, vuelva a intentarlo."
                    : `Ya cuentas con tus ${toCurrency} en tu saldo.`}
                </DialogFooter>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
