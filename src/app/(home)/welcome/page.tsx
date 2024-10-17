// src/app/home/welcome/page.tsx

"use client"; // Ensure this is a client component

import { useSession } from "next-auth/react";
import { Container, Typography, Divider } from "@mui/material";

export default function WelcomeHome() {
  const { data: session } = useSession();

  return (
    <Container>
      <Typography variant="h4">Vitajte, {session?.user?.name}!</Typography>
      <Divider />
      <Typography>Co postneme deska?</Typography>
      {/* Add more content for logged-in users here */}
    </Container>
  );
}
