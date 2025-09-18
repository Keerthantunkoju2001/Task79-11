import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ClickableAndDeletableChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <div className="App bg2">
      <h1>ClickableAndDeletableChips</h1>
      <Stack direction="row" spacing={1} className="bg3">
        <Chip
          label="Clickable Deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          label="Clickable Deletable"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleDelete}
        />
      </Stack>
    </div>
  );
}
