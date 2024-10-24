// src/components/WelcomeMessage.tsx



import { useSession } from "next-auth/react";
import { Typography, Divider } from "@mui/material";

const WelcomeMessage = () => {
  const { data: session } = useSession();

  if (!session) {
    return null; // Don't render anything if not logged in
  }

  return (
    <div>
      <Typography variant="h4">Vitajte, {session.user?.name}!</Typography>
      <Divider />
      <Typography>Co postneme denska?</Typography>
      {/* Add more content for logged-in users here */}
    </div>
  );
};

export default WelcomeMessage;
