import React, { createContext, ReactNode, useContext, useState } from "react";
import { cartItemsDT } from "../types/home";
import { paymentTypesDT } from "../types/payment";
import PaymentService from "../services/CheckoutService";

interface ContextProps {
  loading: boolean;
  selectedProducts: cartItemsDT[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<cartItemsDT[]>>;
  getPaymentType: () => void;
  paymentType: paymentTypesDT[];
}

export const CheckoutContext = createContext({} as ContextProps);

export const useCheckoutContext = () => {
  return useContext(CheckoutContext);
};

const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<cartItemsDT[]>(
    [] as cartItemsDT[]
  );
  const [paymentType, setPaymentType] = useState([] as paymentTypesDT[]);

  const getPaymentType = () => {
    try {
      setLoading(true);
      const response = PaymentService.paymentType();
      setPaymentType(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("getPaymentType error", error);
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        loading,
        selectedProducts,
        setSelectedProducts,
        getPaymentType,
        paymentType,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
