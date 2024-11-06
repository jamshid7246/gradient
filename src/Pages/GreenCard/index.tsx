import {
  Container,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function GreenCard() {
  return (
    <>
      <Container maxWidth="xl">
        <Typography
          sx={{ bgcolor: "#e0e9f4", padding: "6px 18px", fontWeight: "600" }}
        >
          SHAXSIY MALUMOTLAR
        </Typography>
        <form action="">
          <Stack direction="row">
            <FormControl sx={{ display: "flex" }}>
              <FormLabel>Ismingiz: </FormLabel>
              <TextField variant="outlined"></TextField>
            </FormControl>
            <FormControl>
              <FormLabel>Familiyangiz: </FormLabel>
              <TextField variant="standard" sx={{ border: 1, padding: 1 }} />
            </FormControl>
          </Stack>
        </form>

        <Typography></Typography>
      </Container>
    </>
  );
}
