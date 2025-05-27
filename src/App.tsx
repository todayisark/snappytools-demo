import { ThemeProvider } from "@mui/material";
import "./App.css";
import HeaderWrapper from "./components/HeaderWrapper/HeaderWrapper.tsx";
import AppRoutes from "./routes";
import theme from "./theme.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderWrapper />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
