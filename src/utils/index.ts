import { ExpenseItem } from "@/types/splitBill/types";

export function calculateSplit(
  participants: string[],
  expenses: ExpenseItem[],
  baseCurrency: string,
  _targetCurrency: string,
  exchangeRate: number,
  settleCurrency: string
) {
  const result: { [payer: string]: { [receiver: string]: number } } = {};

  // Initialize result structure
  participants.forEach((p1) => {
    result[p1] = {};
    participants.forEach((p2) => {
      result[p1][p2] = 0;
    });
  });

  // Initialize result for each participant
  expenses.forEach((e) => {
    const rate = e.currency === baseCurrency ? 1 : exchangeRate;
    const settleRate = settleCurrency === baseCurrency ? 1 : exchangeRate;

    // Calculate the amount in base currency and split it among buyers
    const amountInBase = e.amount / rate;
    const splitAmount = amountInBase / e.buyers.length;
    const finalAmount = splitAmount * settleRate;

    // Update the result for each buyer
    e.buyers.forEach((buyer) => {
      if (buyer !== e.payer) {
        result[buyer][e.payer] += finalAmount;
      }
    });
  });

  // Reduce circular debts
  participants.forEach((from) => {
    participants.forEach((to) => {
      if (result[from][to] > result[to][from]) {
        result[from][to] -= result[to][from];
        result[to][from] = 0;
      } else {
        result[to][from] -= result[from][to];
        result[from][to] = 0;
      }
    });
  });

  return result;
}
