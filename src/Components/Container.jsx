import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SimpleContainer() {
  return (
    <div className="bg2">
      <h1>SimpleContainer</h1>
      <div className="bg3">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
          </Container>
        </React.Fragment>
      </div>
      <div className="bg3">
        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
          </Container>
        </React.Fragment>
      </div>
    </div>
  );
}
