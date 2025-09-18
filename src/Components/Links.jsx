import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const preventDefault = (event) => event.preventDefault();

export default function UnderlineLink() {
  return (
    <div className="App bg2">
      <h1>UnderlineLink</h1>
      <div className="bg3">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            typography: "body1",
            "& > :not(style) ~ :not(style)": {
              ml: 2,
            },
          }}
          onClick={preventDefault}
        >
          <Link href="#" underline="none">
            {'underline="none"'}
          </Link>
          <Link href="#" underline="hover">
            {'underline="hover"'}
          </Link>
          <Link href="#" underline="always">
            {'underline="always"'}
          </Link>
        </Box>
      </div>
    </div>
  );
}
