import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

export const ExchangeForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BTC");
  const [fromAmount, setFromAmount] = useState("5.000.000,00");
  const [toAmount, setToAmount] = useState("0,080");
  const [showSummary, setShowSummary] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => setIsModalOpen(true);
  const handleContinue = () => setShowSummary(true);

  const handleBack = () => {
    if (showSummary) {
      setShowSummary(false);
    } else {
      navigate("/dashboard");
    }
  };

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
                <Select value={fromCurrency} onValueChange={setFromCurrency}>
                  <SelectTrigger className="w-[100px] rounded-r-none">
                    <SelectValue>
                      <div className="flex items-center">
                        <img
                          src="/public/icons/eeuu-flag.png"
                          alt="USD flag"
                          className="mr-2 h-5 w-5 rounded"
                        />
                        <span className="text-xs">{fromCurrency}</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD" className="text-xs">
                      <div className="flex items-center">
                        <img
                          src="/public/icons/eeuu-flag.png"
                          alt="USD flag"
                          className="mr-2 h-5 w-5 rounded"
                        />
                        <span className="text-xs">USD</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="from-amount"
                  type="text"
                  placeholder="Enter amount"
                  className="flex-1 rounded-l-none"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
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
                <Select value={toCurrency} onValueChange={setToCurrency}>
                  <SelectTrigger className="w-[100px] rounded-r-none">
                    <SelectValue className="text-xs">
                      <div className="flex items-center">
                        <img
                          src="/public/icons/btc.svg"
                          alt="BTC icon"
                          className="mr-2 h-5 w-5 rounded-full"
                        />
                        <span className="text-xs">{toCurrency}</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BTC" className="text-xs">
                      <div className="flex items-center">
                        <img
                          src="/public/icons/btc.svg"
                          alt="BTC icon"
                          className="mr-2 h-5 w-5 rounded-full"
                        />
                        <span className="text-xs">BTC</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="USDT" className="text-xs">
                      <div className="flex items-center">
                        <img
                          src="/public/icons/tether.svg"
                          alt="USDT icon"
                          className="mr-2 h-5 w-5 rounded-full"
                        />
                        <span className="text-xs">USDT</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="USDC" className="text-xs">
                      <div className="flex items-center">
                        <img
                          src="/public/icons/usdc.svg"
                          alt="USDC icon"
                          className="mr-2 h-5 w-5 rounded-full"
                        />
                        <span className="text-xs">USDC</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="to-amount"
                  type="text"
                  placeholder="Estimated amount"
                  className="flex-1 rounded-l-none"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  readOnly
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Resumen de la transacción</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Monto a intercambiar
                </p>
                <p className="text-base font-medium">
                  {fromAmount} {fromCurrency}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Monto a recibir
                </p>
                <p className="text-base font-medium">
                  {toAmount} {toCurrency}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Tasa de cambio
                </p>
                <p className="text-base font-medium">
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
                <p className="text-base font-semibold">0.1%</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total a recibir
                </p>
                <p className="text-base font-medium text-[#06b5b4]">
                  {(
                    parseFloat(toAmount) -
                    parseFloat(toAmount) * 0.001
                  ).toFixed(8)}{" "}
                  {toCurrency}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="mt-20 flex gap-2">
          <Button variant="outline" onClick={handleBack}>
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
            <DialogTitle>Transaction Successful</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <p>Your exchange has been completed successfully.</p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex justify-center">
            <Button
              className="btn-gradient"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
