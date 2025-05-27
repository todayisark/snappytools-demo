import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

interface HeaderProps {
  title?: React.ReactNode;
  showBack?: boolean;
  showAction?: boolean;
  action?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  showAction = true,
  action,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        color: "text.primary",
        boxShadow: "none",
        top: 0,
      }}
    >
      <Toolbar>
        {showBack ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => window.history.back()}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
        ) : null}
        <Typography
          variant="h6"
          component="div"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "50%",
            transformOrigin: "center",
            translate: "0 -50%",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        {showAction ? <Button color="inherit">{action}</Button> : null}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
