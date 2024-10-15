/**
 * El hook personalizado `useExchangeForm` gestiona el estado y las funciones relacionadas con un formulario
 * de intercambio de divisas.
 *
 * @returns {Object} Un objeto que contiene el estado y las funciones para gestionar el formulario de intercambio de divisas.
 * @returns {boolean} isModalOpen - Un booleano que indica si el modal de confirmación de intercambio está abierto.
 * @returns {Function} setIsModalOpen - Una función para actualizar el estado de `isModalOpen`.
 * @returns {string} fromCurrency - La divisa seleccionada para el intercambio desde la cual se está convirtiendo el monto.
 * @returns {Function} setFromCurrency - Una función para actualizar el estado de `fromCurrency`.
 * @returns {string} toCurrency - La divisa seleccionada para el intercambio hacia la cual se está convirtiendo el monto.
 * @returns {string} fromAmount - El monto en `fromCurrency` que se va a intercambiar.
 * @returns {string} toAmount - El monto en `toCurrency` después de la conversión.
 * @returns {boolean} showSummary - Un booleano que indica si se muestra el resumen del intercambio.
 * @returns {Function} handleConfirm - Una función para confirmar el intercambio e iniciar la transacción.
 * @returns {Function} handleContinue - Una función para mostrar el resumen del intercambio.
 * @returns {Function} handleBack - Una función para regresar del resumen al formulario de entrada.
 * @returns {Function} handleFromAmountChange - Una función para actualizar el `fromAmount` basado en la entrada del usuario.
 * @returns {Function} handleBlur - Una función para formatear el `fromAmount` cuando el campo pierde el foco y actualizar el `toAmount`.
 * @returns {Function} handleToCurrencyChange - Una función para actualizar la `toCurrency` y recalcular el `toAmount`.
 * @returns {string|null} error - Una cadena que indica cualquier error que ocurrió durante el proceso de intercambio, o null si no hay error.
 * @returns {boolean} loading - Un booleano que indica si la transacción de intercambio se está procesando.
 *
 * @example
 * const {
 *   isModalOpen,
 *   handleConfirm,
 *   fromAmount,
 *   handleFromAmountChange,
 *   error,
 *   loading,
 * } = useExchangeForm();
 */
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
      setIsModalOpen(true);
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
