"use client"; // Ensures this component runs in the browser

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Alert from "@mui/material/Alert";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const theme = useTheme(); // Access the current theme
  const [isChecked, setIsChecked] = useState(false); // Track checkbox state
  const [showWarning, setShowWarning] = useState(false); // Track warning visibility

  const handleRegister = (provider: string) => {
    if (!isChecked) {
      setShowWarning(true);
      return;
    }
    setShowWarning(false); // Hide warning if checkbox is checked
    signIn(provider, { callbackUrl: "/" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Registrácia
        </Typography>

        {showWarning && (
          <Alert severity="warning" sx={{ width: "100%", maxWidth: "300px" }}>
            Musíte súhlasiť s podmienkami GDPR na registráciu.
          </Alert>
        )}

        <Button
          variant="contained"
          startIcon={<GoogleIcon />} // Add Google icon
          onClick={() => handleRegister("google")}
          sx={{
            width: "100%",
            maxWidth: "300px",
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
          onClick={() => handleRegister("github")}
          sx={{
            width: "100%",
            maxWidth: "300px",
            backgroundColor: "#6e5494", // Custom GitHub color
            color: "#fff",
            "&:hover": {
              backgroundColor: "#6600F5",
            },
          }}
        >
          Registrovať cez GitHub
        </Button>

        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              sx={{ color: theme.palette.primary.main }}
            />
          }
          label={
            <Typography variant="body2">
              Súhlasím s{" "}
              <Link href="/gdpr" style={{ textDecoration: "none", color: "#1976d2" }}>
                podmienkami GDPR
              </Link>
            </Typography>
          }
          sx={{ marginTop: "10px" }}
        />

        <Typography variant="body2" sx={{ marginTop: "20px" }}>
          Už máte účet?{" "}
          <Link href="/auth/prihlasenie" style={{ textDecoration: "none", color: "#1976d2" }}>
            Prihláste sa tu
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
