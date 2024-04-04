import React from "react";
import { useDarkMode } from "../globalcontext/DarkModeProvider";
import { IconButton } from "@mui/material";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <IconButton onClick={toggleDarkMode}>
      {darkMode ? <Brightness7RoundedIcon /> : <Brightness4RoundedIcon />}
    </IconButton>
  );
};

export { DarkModeToggle };
