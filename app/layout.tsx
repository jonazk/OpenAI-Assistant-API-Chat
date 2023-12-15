import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Toaster from "./toaster";
import { Analytics } from "@vercel/analytics/react";
//import OneTapComponent from "./OneTapComponent";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avidly AI Assistant",
  description:
    "OpenAI Assistant",
    metadataBase: 'https://mydomain.com'
};

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <head>
        <script src="https://accounts.google.com/gsi/client" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
        
      </body>
      <Analytics />
    </html>
  );
 
};

// <button onClick={() => signIn('google')}>sign in with gooogle</button>