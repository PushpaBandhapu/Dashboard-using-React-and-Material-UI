import React from "react";
import { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import MuiDrawer from "@mui/material/Drawer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import MenuList from "./MenuList";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerState = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" open={open}>

      <DrawerHeader>
        <Typography variant="h6" style={{ marginRight: "30px" }}>
          <AcUnitIcon />
          CarbonCell
        </Typography>
        <IconButton onClick={handleDrawerState}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <MenuList open={open} />
      
      <Card sx={{ maxWidth: 395 }} className="navBottomCard">
        <CardHeader
          avatar={
            <Avatar
              sx={{
                width: 24,
                height: 24,
                marginLeft: "5px",
                marginRight: "10px",
              }}
            >
              B
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Broklyn Simmons"
          subheader="brooklyn@simm.com"
        />
      </Card>
    </Drawer>
  );
}
