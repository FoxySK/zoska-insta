// src/app/(home)/page.tsx

"use client"; // Ensure this is a client component

import { useSession } from "next-auth/react";
import { Container, Typography } from "@mui/material";
import WelcomeMessage from "@/components/AuthHomeView";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Container>
      {!session ? (
        <>
          <Typography>Domovská stránka</Typography>
          <Typography>Vitajte! Prihláste sa cez navbar.</Typography>
        </>
      ) : (
        <WelcomeMessage />
      )}
    </Container>
  );
}
