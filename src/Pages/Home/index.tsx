import React from "react";
import "./style.css";
import { Stack } from "@mui/material";
import TextFields from "../../companents/TextField";
type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <h1>Part One - entrant Information</h1>
      <Stack
        sx={{
          border: "1px solid black",
          borderRadius: "8px",
          margin: "30px",
        }}
        gap={2}
      >
        <Stack
          sx={{
            padding: "20px",
            bgcolor: "rgb(226, 223, 223)",
            borderRadius: "8px",
          }}
        >
          <h3>1.Name</h3>
        </Stack>
        <Stack>
          <TextFields />
        </Stack>
      </Stack>
    </>
  );
}
