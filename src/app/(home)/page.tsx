"use client"; // Ensure this is a client component

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { Box, Button, Container, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

export default function HomePage() {
  // Use the session as a user check
  const { data: session } = useSession();
  const router = useRouter();
  const theme = useTheme();

  // Automatically redirect to "/prispevok" if the user is logged in
  useEffect(() => {
    if (session) {
      router.push("/prispevok");
    }
  }, [session, router]);

  // If the user is logged in, do not render the home page
  if (session) {
    return null;
  }

  // Handle sign-in via provider
  const handleSignIn = async (provider: string) => {
    const result = await signIn(provider, { redirect: false });
    if (result?.ok) {
      router.push("/prispevok");
    } else {
      console.error("Login failed");
    }
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "40px",
        backgroundColor: theme.palette.background.default,
        px: 2,
      }}
    >
      {/* Welcome Message */}
      <Typography variant="h3">
        Vitajte na ZoškaSnap!
      </Typography>
      <Typography variant="body1">
        Spojte sa s ostatnými, zdieľajte príspevky a príbehy a objavujte nový obsah z celého sveta. Pripojte sa k nám a buďte súčasťou komunity!
      </Typography>

      {/* Call-to-action button redirecting to the registration page */}
      <Button
        variant="contained"
        onClick={() => router.push("/auth/registracia")}
        sx={{
          width: "100%",
          maxWidth: "300px",
          backgroundColor: "#1976d2", // Primary blue
          color: "#fff",
          "&:hover": {
            backgroundColor: "#1565c0", // Darker shade on hover
          },
          padding: "15px",
          fontSize: "1.2rem",
        }}
      >
        Začnite teraz
      </Button>

      {/* Social Sign-In Options */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h6">
          Alebo sa prihláste pomocou:
        </Typography>
        <Button
          variant="contained"
          onClick={() => handleSignIn("google")}
          startIcon={<GoogleIcon />}
          sx={{
            width: "100%",
            maxWidth: "300px",
            backgroundColor: "#F53E1C",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#F4A18F",
            },
          }}
        >
          Prihlásiť sa pomocou Google
        </Button>
        <Button
          variant="contained"
          onClick={() => handleSignIn("github")}
          startIcon={<GitHubIcon />}
          sx={{
            width: "100%",
            maxWidth: "300px",
            backgroundColor: "#6e5494",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#6600F5",
            },
          }}
        >
          Prihlásiť sa pomocou GitHub
        </Button>
      </Box>
    </Container>
  );
}
