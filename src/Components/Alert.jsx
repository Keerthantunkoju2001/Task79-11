import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";

export default function SimpleAlert() {
  return (
    <div className="App bg2">
      <h1>SimpleAlert</h1>
      <div className="bg3">
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Here is a gentle confirmation that your action was successful.
          </Alert>
          <Alert severity="success">This is a success Alert.</Alert>
          <Alert severity="info">This is an info Alert.</Alert>
          <Alert severity="warning">This is a warning Alert.</Alert>
          <Alert severity="error">This is an error Alert.</Alert>
          <Alert variant="filled" severity="success">
            This is a filled success Alert.
          </Alert>
          <Alert variant="filled" severity="info">
            This is a filled info Alert.
          </Alert>
          <Alert variant="filled" severity="warning">
            This is a filled warning Alert.
          </Alert>
          <Alert variant="filled" severity="error">
            This is a filled error Alert.
          </Alert>
          <Alert variant="outlined" severity="success">
            This is an outlined success Alert.
          </Alert>
          <Alert variant="outlined" severity="info">
            This is an outlined info Alert.
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is an outlined warning Alert.
          </Alert>
          <Alert variant="outlined" severity="error">
            This is an outlined error Alert.
          </Alert>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success Alert with an encouraging title.
          </Alert>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info Alert with an informative title.
          </Alert>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning Alert with a cautious title.
          </Alert>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error Alert with a scary title.
          </Alert>
        </Stack>
      </div>
    </div>
  );
}
