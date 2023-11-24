import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Toaster from "./toaster";
import { Analytics } from "@vercel/analytics/react";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { useSession} from "next-auth/react";

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
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
      <Analytics />
    </html>
  );
 
};

// <button onClick={() => signIn('google')}>sign in with gooogle</button>