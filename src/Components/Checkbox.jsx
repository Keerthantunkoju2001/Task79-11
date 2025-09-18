import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes() {
  return (
    <div className="App bg2">
      <h1>Checkboxes</h1>
      <div className="bg3">
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </div>
    </div>
  );
}
