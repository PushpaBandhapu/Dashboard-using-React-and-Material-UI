import {React, useState} from 'react';
import Dashboard from './components/SideNavBar/Dashboard';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

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
        <div>
            <Switch checked={toggleDarkMode} onChange={toggleDarkTheme}/>
        </div>
        <Dashboard />
    </ThemeProvider>
        
    
  )
}
