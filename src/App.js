import React from "react";
/*import { SearchBar, mainListItems, secondaryListItems, NavBottomCard } from './components/SideNavBar/SideNavBar';
import List from '@mui/material/List';
import AcUnitIcon from '@mui/icons-material/AcUnit';*/
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import TradeButton from "./components/TradeButton";
import LineGraph from "./components/LineGraph";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Cards from "./components/Cards"

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" style={{ margin: 0, padding: 0}}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideNavBar />
          </Grid>
          <Grid item xs={9}>
            <Grid container justifyContent="space-between" alignItems="center" style={{ margin: '20px' }}>
              <div>
                <Typography variant="h5">Hello, Brooklyn Simmons
                <WavingHandIcon />
                </Typography>
                <Typography variant="h6">Welcome to spot trading</Typography>
              </div>
              <div>
                <TradeButton />
              </div>
            </Grid>
            <LineGraph />
            <Cards />
          </Grid>
        </Grid>
           
      </Container>

      
    </>
    
  )
}

