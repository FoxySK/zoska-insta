// components/layouts/AuthLayout.tsx

import { redirect } from 'next/navigation'; // Server-side redirect
import { getServerSession } from 'next-auth';
import { authOptions } from '../app/api/auth/[...nextauth]/authOptions';

const PrivateAuth = async ({ children }: { children: React.ReactNode }) => {
  // Get the session on the server-side
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to login page if user is not authenticated
    redirect('/auth/prihlasenie');
    return null;  // Prevent rendering any children if redirected
  }

  // If authenticated, render the content (children)
  return <>{children}</>;
};

export default PrivateAuth;
