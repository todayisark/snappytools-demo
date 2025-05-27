import { LEDSettings } from "@/types/ledBoard/types";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import React from "react";

const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];

interface SettingsPanelProps {
  initialSettings: LEDSettings;
  settings: LEDSettings;
  onChange: (s: any) => void;
  buttonAction?: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  initialSettings,
  settings,
  onChange,
  buttonAction,
}) => {
  return (
    <Box
      sx={{
        padding: 2,
        background: "#f0f0f0",
        overflowY: "auto",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <CloseOutlinedIcon onClick={buttonAction} />
      </Box>
      <TextField
        label="Text"
        fullWidth
        value={settings.text}
        onChange={(e) => onChange({ ...settings, text: e.target.value })}
        sx={{ mb: 2 }}
        inputProps={{ maxLength: 100 }}
      />

      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          label="Font Color"
          type="color"
          value={settings.textColor}
          onChange={(e) => onChange({ ...settings, textColor: e.target.value })}
          sx={{ mb: 2, width: "50%" }}
        />
        <TextField
          label="Background Color"
          type="color"
          value={settings.bgColor}
          onChange={(e) => onChange({ ...settings, bgColor: e.target.value })}
          sx={{ mb: 2, width: "50%" }}
        />
      </Box>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Font</InputLabel>
        <Select
          value={settings.fontFamily}
          onChange={(e) =>
            onChange({ ...settings, fontFamily: e.target.value })
          }
        >
          {fonts.map((font) => (
            <MenuItem value={font} key={font}>
              {font}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ mb: 2 }}>
        Font Size: {settings.fontSize || 100}%
        <Slider
          value={settings.fontSize || 100}
          onChange={(_e, v) => onChange({ ...settings, fontSize: v })}
          step={10}
          min={20}
          max={500}
        />
      </Box>
      <Box>
        speedPercent: {settings.speedPercent}%
        <Slider
          value={settings.speedPercent}
          onChange={(_e, v) => onChange({ ...settings, speedPercent: v })}
          step={10}
          min={10}
          max={500}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 2,
        }}
      >
        <Button
          variant="outlined"
          sx={{ marginRight: 1 }}
          onClick={() => onChange({ ...initialSettings })}
        >
          Reset
        </Button>
        <Button variant="contained" onClick={buttonAction}>
          Commit
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsPanel;
