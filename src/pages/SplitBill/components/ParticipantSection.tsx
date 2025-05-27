import SplitContext from "@/context/SplitContext";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";

const ParticipantSection = () => {
  const context = useContext(SplitContext);
  const [name, setName] = useState<string>("");

  if (!context) return null;

  const { participants, setParticipants } = context;

  const handleAdd = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    if (participants.includes(trimmed)) {
      alert("Participant already exists");
      return;
    }
    setParticipants([...participants, trimmed]);
    setName("");
  };

  const handleDelete = (target: string) => {
    const isInExpense = context.expenses?.some(
      (expense) => expense.payer === target || expense.buyers.includes(target)
    );
    if (isInExpense) {
      alert("Cannot remove participant who is involved in expenses");
      return;
    }
    setParticipants(participants.filter((p) => p !== target));
  };

  return (
    <Box mb={4}>
      <Toolbar />
      <Typography variant="h6">Add Participants</Typography>
      <Box display="flex" gap={2} mt={2} sx={{ marginBottom: 2 }}>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Box>
      {participants.length === 0 ? (
        <Typography color="text.secondary">
          No participants added yet.
        </Typography>
      ) : (
        <List>
          {participants.map((p) => (
            <ListItem
              key={p}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDelete(p)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={p} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ParticipantSection;
