// src/components/AuthCheck.tsx

"use client";

import { useSession } from "next-auth/react";
import { CircularProgress } from "@mui/material";
import SignIn from "@/app/auth/prihlasenie/page";

const AuthCheck = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <CircularProgress />;
  }

  if (!session) {
    return <SignIn />;
  }

  return <>{children}</>;
};

export default AuthCheck;
