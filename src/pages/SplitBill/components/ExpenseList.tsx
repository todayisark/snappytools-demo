import SplitContext from "@/context/SplitContext";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";

const ExpenseList = () => {
  const context = useContext(SplitContext);
  if (!context) return null;

  const { expenses, setExpenses } = context;

  const handleDelete = (index: number) => {
    const updated = [...expenses];
    updated.splice(index, 1);
    setExpenses(updated);
  };

  return (
    <Box mb={4}>
      {expenses.length === 0 ? (
        <Typography color="text.secondary">No expenses added yet.</Typography>
      ) : (
        <List>
          {expenses.map((item, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={`${item.description} - ${item.amount} ${item.currency}`}
                secondary={`Payer: ${
                  item.payer
                } | Shared by: ${item.buyers.join(", ")}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ExpenseList;
