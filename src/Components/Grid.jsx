import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BasicGrid() {
  return (
    <div className="App bg2">
      <h1>BasicGrid</h1>
      <div className="bg3">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Item>size=8</Item>
            </Grid>
            <Grid size={4}>
              <Item>size=4</Item>
            </Grid>
            <Grid size={4}>
              <Item>size=4</Item>
            </Grid>
            <Grid size={8}>
              <Item>size=8</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="bg3">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 8 }}>
              <Item>xs=6 md=8</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
              <Item>xs=6 md=8</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="bg3">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <Item>{index + 1}</Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
