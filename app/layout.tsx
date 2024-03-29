import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {SessionProvider} from "next-auth/react"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {theme} from "@/app/utils/theme"
import AuthContext from "./context/AuthContext";
import  { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "semester",
  description: "Generated by semester app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthContext>
      
        <ThemeProvider theme={theme}>
          
          <Toaster />
        
        {children}
       
       
         </ThemeProvider>
        </AuthContext>
        </body>
    </html>
  );
}
