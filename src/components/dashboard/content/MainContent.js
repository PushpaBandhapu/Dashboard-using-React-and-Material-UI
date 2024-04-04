import React from "react";
import LineGraph from "./LineGraph";
import Cards from "./Cards";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Box, Typography } from "@mui/material";
import { DarkModeToggle } from "../../buttons/DarkModeToggle";
import WalletConnectComponent from '../../buttons/WalletConnectComponent';

export default function MainContent() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>

          <Typography variant="h6">
            Hello, Brooklyn Simmons
            <WavingHandIcon />
          </Typography>

          <Typography variant="p">Welcome to spot trading</Typography>
        </div>
      </div>

      <DarkModeToggle />
      <WalletConnectComponent />     
      <LineGraph />
      <Cards />
    </Box>
  );
}
