import SplitContext from "@/context/SplitContext";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";

const ExpenseInputSection = () => {
  const context = useContext(SplitContext);

  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");
  const [currency, setCurrency] = useState<string>(context?.baseCurrency ?? "");
  const [payer, setPayer] = useState<string>("");
  const [buyers, setBuyers] = useState<string[]>([]);

  if (!context) return null;

  const { participants, expenses, setExpenses, baseCurrency, targetCurrency } =
    context;

  const handleAddExpense = () => {
    if (
      !description.trim() ||
      !amount ||
      !currency ||
      !payer ||
      buyers.length === 0
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setExpenses([
      ...expenses,
      {
        description,
        amount: typeof amount === "string" ? parseFloat(amount) : amount,
        currency,
        payer,
        buyers,
      },
    ]);

    // Reset fields
    setDescription("");
    setAmount("");
    setCurrency(baseCurrency);
    setPayer("");
    setBuyers([]);
  };

  return (
    <Box mb={4}>
      <Typography variant="h6">Add Expense</Typography>
      <Box display="flex" flexDirection="column" gap={2} mt={2}>
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
        <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 2 }}>
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Currency</InputLabel>
            <Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              input={<OutlinedInput label="Currency" />}
            >
              <MenuItem value={baseCurrency}>{baseCurrency}</MenuItem>
              <MenuItem value={targetCurrency}>{targetCurrency}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Payer</InputLabel>
            <Select
              value={payer}
              onChange={(e) => setPayer(e.target.value)}
              input={<OutlinedInput label="Payer" />}
            >
              {participants.map((p) => (
                <MenuItem key={p} value={p}>
                  {p}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Buyers</InputLabel>
            <Select
              multiple
              value={buyers}
              onChange={(e) => setBuyers(e.target.value as string[])}
              input={<OutlinedInput label="Buyers" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {participants.map((p) => (
                <MenuItem key={p} value={p}>
                  <Checkbox checked={buyers.indexOf(p) > -1} />
                  <ListItemText primary={p} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" onClick={handleAddExpense}>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default ExpenseInputSection;
