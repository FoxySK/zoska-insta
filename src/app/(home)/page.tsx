// src/app/(home)/page.tsx


import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import AuthHomeView from "@/components/AuthHomeView";
import NonAuthHomeView from "@/components/NonAuthHomeView";

export const metadata = { title: "Domov | ZoškaSnap" };

export default async function HomePage() {
  // Fetch session on the server
  const session = await getServerSession(authOptions);

  return session ? <AuthHomeView session={session} /> : <NonAuthHomeView />;
}
