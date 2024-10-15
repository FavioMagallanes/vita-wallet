import { useState, useCallback, useEffect } from "react";
import { useCryptoPrices } from "../hooks/use-crypto-prices";
import { calculateConversion, formatCurrency } from "@/utils/format-currency";
import { postExchange } from "@/services/exchange/service-exchange";

export const useExchangeForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BTC");
  const [fromAmount, setFromAmount] = useState("5000.00");
  const [toAmount, setToAmount] = useState("0");
  const [showSummary, setShowSummary] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { data: cryptoPrices } = useCryptoPrices();

  const handleContinue = () => setShowSummary(true);
  const handleBack = () => setShowSummary(false);

  const handleFromAmountChange = useCallback((value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, "");
    setFromAmount(numericValue);
  }, []);

  const updateToAmount = useCallback(() => {
    setToAmount(
      calculateConversion(
        fromAmount,
        fromCurrency,
        toCurrency,
        cryptoPrices ?? null,
      ),
    );
  }, [fromAmount, fromCurrency, toCurrency, cryptoPrices]);

  const handleBlur = useCallback(() => {
    const numericValue = parseFloat(fromAmount.replace(/,/g, ""));
    setFromAmount(formatCurrency(numericValue, 2));
    updateToAmount();
  }, [fromAmount, updateToAmount]);

  const handleConfirm = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const numericFromAmount = parseFloat(fromAmount.replace(/,/g, ""));
      if (isNaN(numericFromAmount)) throw new Error("Invalid amount format");
      await postExchange(fromCurrency, toCurrency, numericFromAmount);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error durante el intercambio:", error);
      setError("Hubo un error al realizar el intercambio.");
    } finally {
      setLoading(false);
    }
  }, [fromCurrency, toCurrency, fromAmount]);

  const handleToCurrencyChange = useCallback(
    (value: string) => {
      setToCurrency(value);
      updateToAmount();
    },
    [updateToAmount],
  );

  useEffect(() => {
    updateToAmount();
  }, [updateToAmount]);

  return {
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
  };
};
