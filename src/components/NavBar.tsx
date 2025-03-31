"use client";

import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import InfoIcon from "@mui/icons-material/Info";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTheme } from "../components/ThemeProvider";

export default function Navbar() {
  const [value, setValue] = React.useState("/");
  const { data: session } = useSession();
  const router = useRouter();
  const { toggleTheme, isDarkMode } = useTheme(); // Access theme context

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  // Fixed user icon for proper alignment
  const userIcon = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "33px", // Match the icon width for consistency
        height: "33px", // Match the icon height
      }}
    >
      {session?.user?.image ? (
        <Avatar
          src={session.user.image}
          alt="Profile Picture"
          sx={{ width: 32, height: 32, cursor: "pointer" }}
        />
      ) : (
        <AccountCircleIcon sx={{ width: 32, height: 32, cursor: "pointer" }} />
      )}
    </Box>
  );

  const commonLinks = [{ label: "Domov", value: "/ ", icon: <HomeIcon /> }];
  const loggedOutLinks = [
    { label: "O nás", value: "/o-nas", icon: <InfoIcon /> },
    /*{ label: "GDPR", value: "/gdpr", icon: <PrivacyTipIcon /> },*/,
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
  ];

  const loggedInLinks = [
    { label: "Profil", value: "/profil", icon: userIcon },
    { label: "Vyhladat", value: "/profil", icon: <SearchIcon /> },
    { label: "Pridat", value: "/prispevok", icon: <AddCircleIcon /> },
    { label: "Odhlásiť sa", value: "/auth/odhlasenie", icon: <LoginIcon /> },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        position: "fixed", // Keep it fixed at the bottom
        bottom: 0,
        left: 0,
        backgroundColor: "background.paper", // Smooth background color
        zIndex: 1000,
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)", // Soft shadow for elevation
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigation}
        sx={{
          display: "flex",
          justifyContent: "space-evenly", // Align icons evenly
          alignItems: "center",
          width: "100%",
          backgroundColor: "transparent",
          borderRadius: "20px", // Rounded corners for smoothness
          padding: "8px 12px", // Spacing for a clean feel
          transition: "all 0.3s ease", // Smooth transition
          "& .MuiBottomNavigationAction-root": {
            padding: "8px 12px", // Inner padding for each icon
            transition: "transform 0.2s ease", // Hover effect on icons
            "&:hover": {
              transform: "scale(1.1)", // Slight scale effect on hover
            },
          },
        }}
      >
        {commonLinks.map((link) => (
          <BottomNavigationAction
            key={link.value}
            label={link.label}
            value={link.value}
            icon={link.icon}
            sx={{
              color: "text.primary", // Default icon color
            }}
          />
        ))}
        {(session ? loggedInLinks : loggedOutLinks).map((link) => (
          <BottomNavigationAction
            key={link.value}
            label={link.label}
            value={link.value}
            icon={link.icon}
            sx={{
              color: "text.primary", // Default icon color
            }}
          />
        ))}
      </BottomNavigation>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: 2,
        }}
      >
        {/* Theme Toggle Button */}
        <IconButton
          onClick={toggleTheme}
          sx={{
            backgroundColor: "transparent",
            borderRadius: "50%",
            padding: "6px",
            transition: "background-color 0.2s ease", // Smooth background on hover
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)", // Light hover effect
            },
          }}
        >
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  );
}
