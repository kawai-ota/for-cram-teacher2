import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterContext from "./chatpage/context/ToasterContext";
import AuthContext from "./chatpage/context/AuthContext";
import ActiveStatus from "./chatpage/components/ActiveStatus";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "For Cram Teacher",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
