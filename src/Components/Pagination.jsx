import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination() {
    return (
      <div className="App bg2">
        <h1>BasicPagination</h1>
        <div className="bg3">
          <Stack spacing={2}>
            <Pagination count={10} />
            <Pagination count={10} color="primary" />
            <Pagination count={10} color="secondary" />
            <Pagination count={10} disabled />
            <Pagination count={10} size="small" />
            <Pagination count={10} />
            <Pagination count={10} size="large" />
          </Stack>
        </div>
      </div>
    );
}
