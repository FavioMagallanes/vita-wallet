import { useState, useCallback, useEffect } from "react";
import { useCryptoPrices } from "../hooks/use-crypto-prices";
import { calculateConversion, formatCurrency } from "@/utils/format-currency";
import { api } from "@/config/axios/axios-instance";

export const useExchangeForm = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("BTC");
  const [fromAmount, setFromAmount] = useState<string>("5000.00");
  const [toAmount, setToAmount] = useState<string>("0");
  const [showSummary, setShowSummary] = useState<boolean>(false);
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
    try {
      const numericFromAmount = parseFloat(fromAmount.replace(/,/g, ""));

      if (isNaN(numericFromAmount)) {
        throw new Error("Invalid amount format");
      }

      const response = await api.post(
        "https://api.qa.vitawallet.io/api/transactions/exchange",
        {
          currency_sent: fromCurrency.toLowerCase(),
          currency_received: toCurrency.toLowerCase(),
          amount_sent: numericFromAmount,
        },
      );

      if (response.status === 200) {
        setIsModalOpen(true);
        console.log("Exchange successful:", response.data);
      }
    } catch (error) {
      console.error("Error during exchange:", error);
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
  };
};
