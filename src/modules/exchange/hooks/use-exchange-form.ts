import { useState, useCallback, useEffect } from "react";
import { useCryptoPrices } from "../hooks/use-crypto-prices";
import { calculateConversion, formatCurrency } from "@/utils/format-currency";
import { postExchange } from "@/services/exchange/service-exchange";

export const useExchangeForm = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("BTC");
  const [fromAmount, setFromAmount] = useState<string>("5000.00");
  const [toAmount, setToAmount] = useState<string>("0");
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { data: cryptoPrices } = useCryptoPrices();

  const handleContinue = useCallback(() => setShowSummary(true), []);
  const handleBack = useCallback(() => setShowSummary(false), []);

  const handleFromAmountChange = useCallback((value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, "");
    setFromAmount(numericValue);
  }, []);

  const handleBlur = useCallback(() => {
    const numericValue = parseFloat(fromAmount.replace(/,/g, ""));
    const formattedValue = formatCurrency(numericValue, 2);
    setFromAmount(formattedValue);
    setToAmount(
      calculateConversion(
        numericValue.toString(),
        fromCurrency,
        toCurrency,
        cryptoPrices || null,
      ),
    );
  }, [fromAmount, fromCurrency, toCurrency, cryptoPrices]);

  const handleConfirm = useCallback(async () => {
    setLoading(true);
    try {
      const numericFromAmount = parseFloat(fromAmount.replace(/,/g, ""));

      if (isNaN(numericFromAmount)) throw new Error("Invalid amount format");
      await postExchange(fromCurrency, toCurrency, numericFromAmount);

      setIsModalOpen(true);
    } catch (error) {
      console.error("Error durante el intercambio:", error);
      setIsModalOpen(true);
      setError("Hubo un error al realizar el intercambio.");
    } finally {
      setLoading(false);
    }
  }, [fromCurrency, toCurrency, fromAmount]);

  const handleToCurrencyChange = useCallback(
    (value: string) => {
      setToCurrency(value);
      setToAmount(
        calculateConversion(
          fromAmount,
          fromCurrency,
          value,
          cryptoPrices || null,
        ),
      );
    },
    [fromAmount, fromCurrency, cryptoPrices],
  );

  useEffect(() => {
    if (cryptoPrices) {
      setToAmount(
        calculateConversion(fromAmount, fromCurrency, toCurrency, cryptoPrices),
      );
    }
  }, [cryptoPrices, fromCurrency, toCurrency, fromAmount]);

  return {
    isModalOpen,
    setIsModalOpen,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
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
