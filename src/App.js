import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Switch, Grid, Container, Card, CardContent } from "@mui/material";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TradeButton from "./components/TradeButton";
import LineGraph from "./components/LineGraph";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Cards from "./components/Cards"

export default function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

   const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', //default theme
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <>
        <CssBaseline />
        <Container maxWidth="xl" style={{ margin: 0, padding: 0}}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <SideNavBar />
            </Grid>
            <Grid item xs={10}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                <Grid container justifyContent="space-between" alignItems="center">
                  <div>
                  <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
                    <Typography variant="h5">Hello, Brooklyn Simmons
                    <WavingHandIcon />
                    </Typography>
                    <Typography variant="h6">Welcome to spot trading</Typography>
                  </div>
                  <div>
                    <TradeButton />
                  </div>
                </Grid>
                </CardContent>
              <LineGraph />
              <Cards />
              </Card>              
            </Grid>
          </Grid>           
        </Container>      
      </>
    </ThemeProvider>
    
  )
}

