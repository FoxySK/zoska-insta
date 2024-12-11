"use client"; // Ensures this component runs in the browser

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link'; 
import { signIn } from 'next-auth/react';
import GoogleIcon from '@mui/icons-material/Google'; 
import GitHubIcon from '@mui/icons-material/GitHub'; 
import { useTheme } from "@mui/material/styles";

export default function SignIn() {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Registrácia
        </Typography>

        <Button
          variant="contained"
          startIcon={<GoogleIcon />} // Add Google icon
          onClick={() => signIn('google', { callbackUrl: '/' })}
          sx={{
            width: '100%',
            maxWidth: '300px',
            backgroundColor: "#F53E1C", // Custom Google color
            color: "#fff",
            "&:hover": {
              backgroundColor: "#F4A18F",
            },
          }}
        >
          Registrovať cez Google
        </Button>

        <Button
          variant="contained"
          startIcon={<GitHubIcon />} // Add GitHub icon
          onClick={() => signIn('github', { callbackUrl: '/' })}
          sx={{
            width: '100%',
            maxWidth: '300px',
            backgroundColor: "#6e5494", // Custom GitHub color
            color: "#fff",
            "&:hover": {
              backgroundColor: "#6600F5",
            },
          }}
        >
          Registrovať cez GitHub
        </Button>

        <Typography variant="body2" sx={{ marginTop: '20px' }}>
          Už máte účet?{' '}
          <Link href="/auth/prihlasenie" style={{ textDecoration: 'none', color: '#1976d2' }}>
            Prihláste sa tu
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
