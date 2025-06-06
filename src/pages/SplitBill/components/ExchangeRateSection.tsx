import SplitContext from "@/context/SplitContext";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";

const ExchangeRateSection = () => {
  const context = useContext(SplitContext);
  const [inputRate, setInputRate] = useState<number>(
    context?.exchangeRate ?? 1
  );

  if (!context) return null;

  const {
    exchangeRate,
    setExchangeRate,
    expenses,
    baseCurrency,
    setBaseCurrency,
    targetCurrency,
    setTargetCurrency,
    useSingleCurrency,
    setUseSingleCurrency,
  } = context;

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

  const handleToggleSingleCurrency = () => {
    const next = !useSingleCurrency;
    setUseSingleCurrency(next);
    if (next) {
      setTargetCurrency("KRW");
      setExchangeRate(1);
    }
  };

  return (
    <Box mb={4}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Exchange Rate</Typography>
        <Button
          size="small"
          variant={useSingleCurrency ? "contained" : "outlined"}
          onClick={handleToggleSingleCurrency}
        >
          {useSingleCurrency ? "Use exchange rate" : "Use base currency only"}
        </Button>
      </Box>
      <Box display="flex" flexDirection="column" gap={2} mt={2}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <TextField
            label="Base Currency"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            fullWidth
            disabled={expenses.length > 0}
          />
          <TextField
            label="Target Currency"
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
            fullWidth
            disabled={useSingleCurrency || expenses.length > 0}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography
            sx={{ color: `${useSingleCurrency ? "text.disabled" : "inherit"}` }}
          >{`1 ${baseCurrency} =`}</Typography>
          <TextField
            type="number"
            value={inputRate}
            onChange={(e) => setInputRate(parseFloat(e.target.value))}
            size="small"
            disabled={useSingleCurrency}
          />
          <Typography
            sx={{ color: `${useSingleCurrency ? "text.disabled" : "inherit"}` }}
          >
            {targetCurrency}
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={handleUpdateRate}
          disabled={
            useSingleCurrency || targetCurrency === "" || baseCurrency === ""
          }
        >
          {exchangeRate !== 1 ? "Update" : "Confirm"}
        </Button>
        {!useSingleCurrency ? (
          <Typography sx={{ mt: 2, color: "secondary.main" }}>
            Current exchange rate:{" "}
            {exchangeRate !== 1 ? (
              <strong>
                1 {baseCurrency} = {exchangeRate} {targetCurrency}
              </strong>
            ) : (
              <span style={{ color: "red", fontWeight: "bold" }}>Not Set</span>
            )}
          </Typography>
        ) : (
          <Typography sx={{ mt: 2, color: "secondary.main" }}>
            Using base currency only, no exchange rate applied.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ExchangeRateSection;
