// src/app/auth/prihlasenie/page.tsx

"use client"; // Ensure this is a client component

import { signIn, signOut, useSession } from "next-auth/react";
import { Container, Button, Typography } from "@mui/material";

export default function SignIn() {
  const { data: session } = useSession();
  

  return (
    <Container>
      <Typography variant="h4">Prihlásiť sa</Typography>

      {!session ? (
        <Button variant="contained" onClick={() => signIn("google")}>
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
