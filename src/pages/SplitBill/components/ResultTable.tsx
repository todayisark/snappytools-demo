import SplitContext from "@/context/SplitContext";
import { calculateSplit } from "@/utils/index";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";

const ResultTable = () => {
  const context = useContext(SplitContext);
  const [settleCurrency, setSettleCurrency] = useState<string>("");

  if (!context) return null;

  const { participants, expenses, baseCurrency, targetCurrency, exchangeRate } =
    context;

  if (settleCurrency === "" && context) {
    setSettleCurrency(context.baseCurrency);
  }

  const splitMap = calculateSplit(
    participants,
    expenses,
    baseCurrency,
    targetCurrency,
    exchangeRate,
    settleCurrency
  );

  const tableData: {
    giver: string;
    receiver: string;
    amount: string;
  }[] = [];

  participants.forEach((payer) => {
    participants.forEach((receiver) => {
      if (splitMap[payer][receiver] > 0) {
        tableData.push({
          giver: payer,
          receiver,
          amount: splitMap[payer][receiver].toFixed(2),
        });
      }
    });
  });

  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>
        Settlement Result
      </Typography>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <FormControl>
          <InputLabel>Settle Currency</InputLabel>
          <Select
            value={settleCurrency}
            onChange={(e) => setSettleCurrency(e.target.value)}
            label="Settle Currency"
            disabled={context.useSingleCurrency}
          >
            <MenuItem value={baseCurrency}>{baseCurrency}</MenuItem>
            <MenuItem value={targetCurrency}>{targetCurrency}</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {tableData.length === 0 ? (
        <Typography color="text.secondary">No debts to settle.</Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Amount ({settleCurrency})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.giver}</TableCell>
                <TableCell>{row.receiver}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
};

export default ResultTable;
