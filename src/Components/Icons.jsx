import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import FourKIcon from "@mui/icons-material/FourK";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import Stack from "@mui/material/Stack";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgMaterialIcons() {
  return (
    <div className="App bg2">
      <h1>SvgMaterialIcons</h1>
      <Box sx={{ flexGrow: 1 }} className="bg3">
        <Grid container sx={{ color: "text.primary" }}>
          <Grid size={4}>
            <Typography>Filled</Typography>
          </Grid>
          <Grid size={8}>
            <DeleteIcon />
            <DeleteForeverIcon />
          </Grid>
          <Grid size={4}>
            <Typography>Outlined</Typography>
          </Grid>
          <Grid size={8}>
            <DeleteOutlinedIcon />
            <DeleteForeverOutlinedIcon />
          </Grid>
          <Grid size={4}>
            <Typography>Rounded</Typography>
          </Grid>
          <Grid size={8}>
            <DeleteRoundedIcon />
            <DeleteForeverRoundedIcon />
          </Grid>
          <Grid size={4}>
            <Typography>Two Tone</Typography>
          </Grid>
          <Grid size={8}>
            <DeleteTwoToneIcon />
            <DeleteForeverTwoToneIcon />
          </Grid>
          <Grid size={4}>
            <Typography>Sharp</Typography>
          </Grid>
          <Grid size={8}>
            <DeleteSharpIcon />
            <DeleteForeverSharpIcon />
          </Grid>
          <Grid size={4}>
            <Typography>Edge-cases</Typography>
          </Grid>
          <Grid size={8}>
            <ThreeDRotationIcon />
            <FourKIcon />
            <ThreeSixtyIcon />
          </Grid>
        </Grid>
      </Box>
      <div>
        <Stack direction="row" spacing={3} className="bg3">
          <HomeIcon />
          <HomeIcon color="primary" />
          <HomeIcon color="secondary" />
          <HomeIcon color="success" />
          <HomeIcon color="action" />
          <HomeIcon color="disabled" />
          <HomeIcon sx={{ color: pink[500] }} />
        </Stack>
      </div>
    </div>
  );
}
