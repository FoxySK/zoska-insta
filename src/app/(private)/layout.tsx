// components/layouts/AuthLayout.tsx

import PrivateAuth from '../../components/PrivateAuth';  // Import the PrivateAuth component

const PrivateLayout = async ({ children }: { children: React.ReactNode }) => {
  // Wrap the children with PrivateAuth to ensure authentication
  return <PrivateAuth>{children}</PrivateAuth>;
};

export default PrivateLayout;
