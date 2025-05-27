export type ExpenseItem = {
  description: string;
  amount: number;
  currency: string;
  payer: string;
  buyers: string[];
};

export type Rate = {
  baseCurrency: string;
  targetCurrency: string;
  rate: number;
};

export type Participant = string;

export type SplitResult = {
  participant: Participant;
  amountOwed: number;
  amountPaid: number;
};
