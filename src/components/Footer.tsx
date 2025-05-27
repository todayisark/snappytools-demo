import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <BottomNavigation
      showLabels
      value={currentPath}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "primary.light",
      }}
    >
      <BottomNavigationAction
        label="Tools"
        icon={<WidgetsOutlinedIcon />}
        value="/toollist"
        to="/toollist"
        component={Link}
      />
      <BottomNavigationAction
        label="Coming Soon"
        icon={<ManageSearchOutlinedIcon />}
        value="/templates"
        to="/templates"
        component={Link}
      />
      <BottomNavigationAction
        label="Coming Soon"
        icon={<ManageAccountsOutlinedIcon />}
        value="/settings"
        to="/settings"
        component={Link}
      />
    </BottomNavigation>
  );
};
export default Footer;
