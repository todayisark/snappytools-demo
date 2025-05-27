import Footer from "@/components/Footer";
import { Box, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ToolList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 6,
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <Button
          variant="contained"
          sx={{
            height: 60,
          }}
          onClick={() => navigate("/splitbill")}
        >
          Split Bill
        </Button>
        <Button
          variant="contained"
          sx={{
            height: 60,
          }}
          onClick={() => navigate("/ledboard")}
        >
          LED Board
        </Button>
      </Box>
      <Footer />
    </div>
  );
};

export default ToolList;
