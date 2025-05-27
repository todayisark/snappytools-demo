import { LEDSettings } from "@/types/ledBoard/types";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Box, Button, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import ScrollText from "./components/ScrollText";
import SettingsPanel from "./components/SettingsPanel";

const DEFAULT_SETTINGS: LEDSettings = {
  text: "Hello, world!",
  textColor: "#FFFFFF",
  bgColor: "#000000",
  fontFamily: "Arial",
  fontSize: 100, // 100% size
  speedPercent: 100, // 100% speed
};
const LED = () => {
  const [settings, setSettings] = useState<LEDSettings>({
    ...DEFAULT_SETTINGS,
  });
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 4,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          onClick={() => window.history.back()}
          sx={{ color: settings.textColor, marginLeft: 1 }}
        >
          <ArrowBackOutlinedIcon />
        </IconButton>
        <Button
          variant="outlined"
          onClick={() => setOpen(true)}
          sx={{
            margin: 2,
            color: settings.textColor,
            borderColor: settings.textColor,
          }}
        >
          set
        </Button>
      </Box>
      <ScrollText {...settings} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SettingsPanel
          initialSettings={DEFAULT_SETTINGS}
          settings={settings}
          onChange={setSettings}
          buttonAction={() => setOpen(false)}
        />
      </Modal>
    </>
  );
};

export default LED;
