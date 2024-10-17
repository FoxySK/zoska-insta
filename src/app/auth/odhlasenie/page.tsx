// src/app/auth/odhlasenie/page.tsx

"use client"; // Ensure this is a client component

import { signOut, useSession } from "next-auth/react";
import { Container, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      // Redirect to login if the user is not logged in
      router.push("/auth/prihlasenie");
    }
  }, [session, router]);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Container>
      <Typography variant="h4">Odhlásenie</Typography>
      <Typography>Ste si istý, že sa chcete odhlásiť?</Typography>
      <Button variant="contained" onClick={handleSignOut}>
        Áno, odhlásiť sa
      </Button>

    </Container>
  );
}
