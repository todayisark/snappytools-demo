import Footer from "@/components/Footer";
import { Box, Container, Link, Typography } from "@mui/material";

const Settings = () => {
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
          You can customize your preferences here.
        </Typography>
        <Typography
          variant="body2"
          color="text.disabled"
          align="center"
          sx={{ mt: 8 }}
        >
          © {new Date().getFullYear()} SnappyKit. All rights reserved. <br />
          Icons by{" "}
          <Link
            href="https://icons8.com"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="inherit"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            Icons8
          </Link>
          .
        </Typography>
      </Box>
      <Footer />
    </Container>
  );
};

export default Settings;
