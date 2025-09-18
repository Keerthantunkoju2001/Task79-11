import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function FloatingActionButtonExtendedSize() {
  return (
    <div className="App bg2">
      <h1>FloatingActionButtonExtendedSize</h1>
      <div className="bg3">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab variant="extended" size="small" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
            Extended
          </Fab>
          <Fab variant="extended" size="medium" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
            Extended
          </Fab>
          <Fab variant="extended" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
            Extended
          </Fab>
        </Box>
      </div>
    </div>
  );
}
