import { ExpenseItem, Participant } from "@/types/splitBill/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type SplitContextType = {
  participants: Participant[];
  setParticipants: Dispatch<SetStateAction<Participant[]>>;
  expenses: ExpenseItem[];
  setExpenses: Dispatch<SetStateAction<ExpenseItem[]>>;
  exchangeRate: number;
  setExchangeRate: Dispatch<SetStateAction<number>>;
  baseCurrency: string;
  setBaseCurrency: Dispatch<SetStateAction<string>>;
  targetCurrency: string;
  setTargetCurrency: Dispatch<SetStateAction<string>>;
};

const SplitContext = createContext<SplitContextType | null>(null);

const CACHE_KEY = "snappy-kit-data";

export function SplitContextProvider({ children }: { children: ReactNode }) {
  const [participants, setParticipants] = useState<Participant[]>(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached).participants || [];
      } catch {
        return [];
      }
    }
    return [];
  });
  const [expenses, setExpenses] = useState<ExpenseItem[]>(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached).expenses || [];
      } catch {
        return [];
      }
    }
    return [];
  });
  const [exchangeRate, setExchangeRate] = useState<number>(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached).exchangeRate ?? 1;
      } catch {
        return 1;
      }
    }
    return 1;
  });

  const [baseCurrency, setBaseCurrency] = useState<string>(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached).baseCurrency || "CNY";
      } catch {
        return "CNY";
      }
    }
    return "CNY";
  });

  const [targetCurrency, setTargetCurrency] = useState<string>(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached).targetCurrency || "KRW";
      } catch {
        return "KRW";
      }
    }
    return "KRW";
  });

  // 自动保存到缓存
  useEffect(() => {
    const cache = {
      participants,
      expenses,
      exchangeRate,
      baseCurrency,
      targetCurrency,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  }, [participants, expenses, exchangeRate, baseCurrency, targetCurrency]);

  return (
    <SplitContext.Provider
      value={{
        participants,
        setParticipants,
        expenses,
        setExpenses,
        exchangeRate,
        setExchangeRate,
        baseCurrency,
        setBaseCurrency,
        targetCurrency,
        setTargetCurrency,
      }}
    >
      {children}
    </SplitContext.Provider>
  );
}

export default SplitContext;
