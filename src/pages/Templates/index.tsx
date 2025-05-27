import Footer from "@/components/Footer";
import { Box, Container, Typography } from "@mui/material";

const Templates = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Coming Soon...
        </Typography>
        <Typography color="text.secondary" mb={4}>
          You can view and manage saved templates for various tools here.
        </Typography>
      </Box>
      <Footer />
    </Container>
  );
};

export default Templates;
