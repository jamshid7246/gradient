import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel, Stack, Typography } from "@mui/material";

export default function TextFields() {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },

          display: "flex",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack
          sx={{
            gap: 2,
          }}
        >
          <label htmlFor="outlined-basic">First Name</label>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Stack>
        <Stack
          sx={{
            gap: 2,
          }}
        >
          <label htmlFor="filled-basic">Last Name</label>
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </Stack>
        <Stack
          sx={{
            gap: 2,
          }}
        >
          <label htmlFor="standard-basic">Middle Name</label>
          <TextField id="standard-basic" label="Filled" variant="filled" />
        </Stack>
        <FormControl>
          <FormLabel>Last name</FormLabel>
          <TextField variant="outlined" />
        </FormControl>
      </Box>
    </>
  );
}
