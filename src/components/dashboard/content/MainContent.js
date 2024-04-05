import React from "react";
import LineGraph from "./LineGraph";
import PieChart from "./PieChart";
import Cards from "./Cards";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Box, Typography, Grid } from "@mui/material";
import { DarkModeToggle } from "../../buttons/DarkModeToggle";
import WalletConnectComponent from '../../buttons/WalletConnectComponent';

export default function MainContent() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
         
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>

          <Typography variant="h6">
            Hello, <Box component="span" sx={{ color: '#00FF00' }}>Brooklyn Simmons</Box>
            <WavingHandIcon sx={{ color: '#FFFF00' , fontSize: '2.3rem', pt: 1.7, pr: 0.5, pl: 0.5 }} />
          </Typography>

          <Typography variant="p">Welcome to<Box component="span" sx={{ color: '#00FF00' }}> spot trading!</Box> </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <DarkModeToggle />
          <WalletConnectComponent  />
 
        </div>
      </div>
      <Grid container spacing={3}>
        {/* Line Graph Section */}
        <Grid item xs={12} md={8} lg={7} sx={{ pt: 2, pb: 2 }}>
          <LineGraph />
        </Grid>
         {/* Pie Chart Section */}
        <Grid item xs={12} md={4} lg={5} sx={{ pt: 2, pb: 2 }}>
          <PieChart />
        </Grid>
      </Grid>
   
      
      <Cards />
    </Box>
  );
}
