// src/components/WelcomeMessage.tsx




import { Typography, Divider } from "@mui/material";
import { Session } from "next-auth";



export default function AuthHomeView({ session }: { session: Session }) {


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