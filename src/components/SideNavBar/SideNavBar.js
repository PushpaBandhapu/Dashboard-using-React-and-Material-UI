import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LanguageIcon from "@mui/icons-material/Language";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import WalletIcon from "@mui/icons-material/Wallet";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './SideNavBar.css';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${alpha(theme.palette.common.black, 0.15)}`,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
          </IconButton>
        
      {isOpen && (
        <div>
            <Typography variant="h6" gutterBottom>
              <AcUnitIcon />
                CarbonCell
            </Typography>
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                />
            </Search>
            <ListItemButton selected={activeItem === 'Home'} onClick={() => handleItemClick('Home')} style={{ color: activeItem === 'Home' ? 'green' : 'inherit' }}>
                <ListItemIcon>
                <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" className="navLink"/>
            </ListItemButton>
            <ListItemButton selected={activeItem === 'Organization'} onClick={() => handleItemClick('Organization')} style={{ color: activeItem === 'Organization' ? 'green' : 'inherit' }}>
                <ListItemIcon>
                <CorporateFareIcon />
                </ListItemIcon>
                <ListItemText primary="Organization" className="navLink" />
            </ListItemButton>
            <ListItemButton selected={activeItem === 'Assets'} onClick={() => handleItemClick('Assets')} style={{ color: activeItem === 'Assets' ? 'green' : 'inherit' }}>
                <ListItemIcon>
                <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary="Assets" className="navLink"/>
            </ListItemButton>
            <ListItemButton  selected={activeItem === 'Trade'} onClick={() => handleItemClick('Trade')} style={{ color: activeItem === 'Trade' ? 'green' : 'inherit' }}>
                <ListItemIcon>
                <ImportExportIcon />
                </ListItemIcon>
                <ListItemText primary="Trade"  className="navLink" />
            </ListItemButton>
            <ListItemButton  selected={activeItem === 'History'} onClick={() => handleItemClick('History')} style={{ color: activeItem === 'History' ? 'green' : 'inherit' }}>
                <ListItemIcon>
                <HourglassEmptyIcon />
                </ListItemIcon>
                <ListItemText primary="History" className="navLink" />
            </ListItemButton>
            <ListItemButton  style={{ marginBottom: '20px' }}>
                <ListItemIcon selected={activeItem === 'Wallet'} onClick={() => handleItemClick('Wallet')} style={{ color: activeItem === 'Wallet' ? 'green' : 'inherit' }}>
                <WalletIcon />
                </ListItemIcon>
                <ListItemText primary="Wallet" className="navLink" />
            </ListItemButton>
            <ListItemButton  selected={activeItem === 'Notifications'} onClick={() => handleItemClick('Notifications')} style={{ color: activeItem === 'Notifications' ? 'green' : 'inherit' }}>
                <ListItemIcon>
                <NotificationsNoneIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" className="navLink" />
            </ListItemButton>
            <ListItemButton  selected={activeItem === 'Support'} onClick={() => handleItemClick('Support')} style={{ color: activeItem === 'Support' ? 'green' : 'inherit' }}>
                <ListItemIcon>
                <ContactSupportIcon />
                </ListItemIcon>
                <ListItemText primary="Support" className="navLink" />
            </ListItemButton>
            <ListItemButton selected={activeItem === 'Settings'} onClick={() => handleItemClick('Settings')} style={{ color: activeItem === 'Settings' ? 'green' : 'inherit' }}>
                <ListItemIcon>
                <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" className="navLink" />
            </ListItemButton>
            <Card sx={{ maxWidth: 395 }} className="navBottomCard">
                <CardHeader className="navBottomCardHead"
                avatar={
                    <Avatar sx={{ width: 24, height: 24 }}>
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
        </div>
        
      )}
    </div>
  );
};

export default SideNavBar;
