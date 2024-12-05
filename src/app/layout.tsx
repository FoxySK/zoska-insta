// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import AuthProvider from "../components/AuthProvider";
import { CustomThemeProvider } from "../components/ThemeProvider";
import { Box } from "@mui/material"; // Import Box from MUI for centering

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <CustomThemeProvider>
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
              <main
                style={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 2, // Optional: Adds some space
                }}
              >
                {/* Box to center the content */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100%", // Full height for content to stretch
                    width: "100%",    // Full width
                  }}
                >
                  {children}
                </Box>
              </main>
              <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
                <Navbar />  {/* Fixed navbar at the bottom */}
              </div>
            </div>
          </CustomThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
