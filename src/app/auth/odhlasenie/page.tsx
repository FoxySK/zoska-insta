"use client"; // Ensure this is a client component

import { signOut, useSession } from "next-auth/react";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles"; 

export default function SignOut() {
  const { data: session } = useSession();
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    if (!session) {
      // Redirect to login if the user is not logged in
      router.push("/auth/prihlasenie");
    }
  }, [session, router]);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/auth/prihlasenie" });
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
          Odhlásenie
        </Typography>
        <Typography variant="body1">
          Ste si istý, že sa chcete odhlásiť?
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleSignOut}
          sx={{ width: "100%", maxWidth: "300px" }}
        >
          Áno, odhlásiť sa
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => router.push("../prispevok")}
          sx={{ width: "100%", maxWidth: "300px" }}
        >
        Zrusit
        </Button>
      </Box>
    </Box>
  );
}
