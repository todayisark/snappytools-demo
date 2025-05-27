import { SplitContextProvider } from "@/context/SplitContext";
import { Box, Button, Container } from "@mui/material";
import ExchangeRateSection from "./components/ExchangeRateSection";
import ExpenseInputSection from "./components/ExpenseInputSection";
import ExpenseList from "./components/ExpenseList";
import ParticipantSection from "./components/ParticipantSection";
import ResultTable from "./components/ResultTable";

const SplitBill: React.FC = () => {
  const handleClearCache = () => {
    localStorage.removeItem("snappy-kit-data");
    window.location.reload();
  };
  return (
    <SplitContextProvider>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <ParticipantSection />
        <ExchangeRateSection />
        <ExpenseInputSection />
        <ExpenseList />
        <ResultTable />
        <Box mt={4} mb={8} display="flex" justifyContent="center">
          <Button variant="outlined" color="error" onClick={handleClearCache}>
            Clear Cache
          </Button>
        </Box>
      </Container>
    </SplitContextProvider>
  );
};
export default SplitBill;
