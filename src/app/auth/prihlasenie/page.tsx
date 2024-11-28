// src/app/auth/prihlasenie/page.tsx

"use client"; // Ensure this is a client component

import { signIn, signOut, useSession } from "next-auth/react";
import { Container, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function SignIn() {
  const { data: session } = useSession(); // Access session data
  const router = useRouter(); // Access router for navigation

  // Handle Google login and redirect after successful login
  const handleSignIn = async () => {
    const result = await signIn("google", {
      redirect: false, // Prevent automatic redirect
    });

    if (result?.ok) {
      // After a successful login, manually redirect to /prispevky
      router.push("/prispevky");
    } else {
      // Handle login failure (e.g., show a message)
      console.error("Login failed");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Prihlásiť sa</Typography>

      {!session ? (
        <Button variant="contained" onClick={handleSignIn}>
          Prihlásiť sa pomocou Google
        </Button>
      ) : (
        <>
          <Typography variant="h6">Už ste prihlásený ako {session.user?.name}.</Typography>
          <Button variant="contained" onClick={() => signOut()}>
            Odhlásiť sa
          </Button>
        </>
      )}
    </Container>
  );
}
