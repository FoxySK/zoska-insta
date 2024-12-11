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
import { usePathname } from "next/navigation";
import { useTheme } from "../components/ThemeProvider";

export default function Navbar() {
  const [value, setValue] = React.useState("/");
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const { toggleTheme, isDarkMode } = useTheme(); // Access theme context

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  const commonLinks = [{ label: "Domov", value: "/", icon: <HomeIcon /> }];

  const loggedOutLinks = [
    { label: "O nás", value: "/o-nas", icon: <InfoIcon /> },
    { label: "GDPR", value: "/gdpr", icon: <PrivacyTipIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
  ];

  const loggedInLinks = [
    { label: "Profil", value: "/profil", icon: <AccountCircleIcon /> },
    { label: "Príspevky", value: "/prispevok", icon: <AddCircleIcon /> },
    { label: "Odhlásiť sa", value: "/auth/odhlasenie", icon: <LoginIcon /> },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px",
        position: "fixed", // Keep it fixed
        bottom: 0, // Stick to the bottom
        left: 0,
        backgroundColor: "background.paper", // Match theme
        zIndex: 1000, // Ensure it's above other elements
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigation}
        sx={{ flexGrow: 1, backgroundColor: "transparent" }}
      >
        {commonLinks.map((link) => (
          <BottomNavigationAction key={link.value} label={link.label} value={link.value} icon={link.icon} />
        ))}
        {(session ? loggedInLinks : loggedOutLinks).map((link) => (
          <BottomNavigationAction key={link.value} label={link.label} value={link.value} icon={link.icon} />
        ))}
      </BottomNavigation>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: 2,
        }}
      >
        {session?.user?.image ? (
          <Avatar
            src={session.user.image}
            alt="Profile Picture"
            sx={{ width: 32, height: 32, marginRight: 2, cursor: "pointer" }}
          />
        ) : (
          <AccountCircleIcon sx={{ width: 32, height: 32, marginRight: 2, cursor: "pointer" }} />
        )}

        {/* Theme Toggle Button */}
        <IconButton onClick={toggleTheme}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  );
}
