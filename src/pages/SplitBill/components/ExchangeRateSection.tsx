import SplitContext from "@/context/SplitContext";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";

const ExchangeRateSection = () => {
  const context = useContext(SplitContext);

  const [inputRate, setInputRate] = useState<number>(
    context?.exchangeRate ?? 1
  );
  const [baseCurrency, setBaseCurrency] = useState("CNY");
  const [targetCurrency, setTargetCurrency] = useState("KRW");

  if (!context) return null;

  const { exchangeRate, setExchangeRate } = context;

  const handleUpdateRate = () => {
    if (inputRate > 0) {
      setExchangeRate(inputRate);
      alert(
        `Exchange rate updated: 1 ${baseCurrency} = ${inputRate} ${targetCurrency}`
      );
    } else {
      alert("Please enter a valid exchange rate greater than 0");
    }
  };

  return (
    <Box mb={4}>
      <Typography variant="h6">Exchange Rate</Typography>
      <Box display="flex" flexDirection="column" gap={2} mt={2}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <TextField
            label="Base Currency"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            fullWidth
          />
          <TextField
            label="Target Currency"
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
            fullWidth
          />
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography>{`1 ${baseCurrency} =`}</Typography>
          <TextField
            type="number"
            value={inputRate}
            onChange={(e) => setInputRate(parseFloat(e.target.value))}
            size="small"
          />
          <Typography>{targetCurrency}</Typography>
        </Box>
        <Button variant="contained" onClick={handleUpdateRate}>
          {exchangeRate !== 1 ? "Update" : "Confirm"}
        </Button>
        <Typography sx={{ mt: 2, color: "secondary.main" }}>
          Current exchange rate:{" "}
          {exchangeRate > 0 ? (
            <strong>
              1 {baseCurrency} = {exchangeRate} {targetCurrency}
            </strong>
          ) : (
            <span style={{ color: "red", fontWeight: "bold" }}>Not Set</span>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default ExchangeRateSection;
