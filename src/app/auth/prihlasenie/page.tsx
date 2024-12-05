"use client"; // Ensure this is a client component

import { signIn, signOut, useSession } from "next-auth/react";
import { Box, Button, Container, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google"; 
import GitHubIcon from "@mui/icons-material/GitHub"; 
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles"; 

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();
  const theme = useTheme(); // Access the current theme

  // Handle Google sign-in
  const handleSignIn = async (provider: string) => {
    const result = await signIn(provider, {
      redirect: false,
    });

    if (result?.ok) {
      router.push("/prispevky");
    } else {
      console.error("Login failed");
    }
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
          Prihlásiť sa
        </Typography>

        {!session ? (
          <>
            <Button
              variant="contained"
              color="primary"
              startIcon={<GoogleIcon />}
              onClick={() => handleSignIn("google")}
              sx={{ width: "100%", maxWidth: "300px" }}
            >
              Prihlásiť sa pomocou Google
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<GitHubIcon />}
              onClick={() => handleSignIn("github")}
              sx={{ width: "100%", maxWidth: "300px" }}
            >
              Prihlásiť sa pomocou GitHub
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h6">
              Už ste prihlásený ako {session.user?.name}.
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => signOut()}
              sx={{ width: "100%", maxWidth: "300px" }}
            >
              Odhlásiť sa
            </Button>
          </>
        )}

        {!session && (
          <Typography variant="body2" sx={{ marginTop: "20px" }}>
            Nemáte účet?{" "}
            <a href="/auth/registracia" style={{ textDecoration: "none", color: "#1976d2" }}>
              Registrovať sa
            </a>
          </Typography>
        )}
      </Box>
    </Box>
  );
}
