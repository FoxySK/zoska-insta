// src/components/Navbar.tsx

"use client";

import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [value, setValue] = React.useState('/');
  const { data: session } = useSession();
  const router = useRouter();

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    console.log(`Navigating to: ${newValue}`);
    setValue(newValue);
    router.push(newValue); 
  };

  const commonLinks = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Profily", value: "/profil", icon: <AccountCircleIcon /> },
    { label: "Príspevky", value: "/prispevok", icon: <AddCircleIcon /> },
  ];

  const loggedOutLinks = [
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
  ];

  const loggedInLinks = [
    { label: "Odhlásiť sa", value: "/auth/odhlasenie", icon: <LoginIcon /> },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigation}
      >
        {commonLinks.map(link => (
          <BottomNavigationAction 
            key={link.value} 
            label={link.label} 
            value={link.value} 
            icon={link.icon} 
          />
        ))}
        
        {(session ? loggedInLinks : loggedOutLinks).map(link => (
          <BottomNavigationAction 
            key={link.value} 
            label={link.label} 
            value={link.value} 
            icon={link.icon} 
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
