import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from '@mui/material/styles';

export default function BoxBasic() {
  return (
    <div className="App bg2">
        <h1>BoxBasic</h1>
        <div className="bg3">
            <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
            This Box renders as an HTML section element.
            </Box>
        </div>
        <div className="bg3 box">
            <ThemeProvider
            theme={{
                palette: {
                primary: {
                    main: '#007FFF',
                    dark: '#0066CC',
                },
                },
            }}
            >
            <Box
                sx={{
                width: 100,
                height: 100,
                borderRadius: 1,
                bgcolor: 'primary.main',
                '&:hover': {
                    bgcolor: 'primary.dark',
                },
                }}
            />
            </ThemeProvider>
        </div>
    </div>
  );
}



