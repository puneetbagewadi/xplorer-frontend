import type { Metadata } from "next";
import "./globals.css";
import { M_PLUS_2 } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Web3Provider } from "@/providers/Web3Provider";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { StoreProvider } from "@/providers/StoreProvider";

const m_plus_2 = M_PLUS_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-m_plus_2"
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "xplorer",
  description:
    "Partisia Blockchain allows users to compute all kinds of data while maintaining complete data privacy at rest, in transit, and in use.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "xplorer",
    description:
      "Partisia Blockchain allows users to compute all kinds of data while maintaining complete data privacy at rest, in transit, and in use.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "xplorer",
    description:
      "Partisia Blockchain allows users to compute all kinds of data while maintaining complete data privacy at rest, in transit, and in use."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${m_plus_2.className} bg-body-ash`}>
        <StoreProvider>
          <Web3Provider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <AdminPanelLayout>{children}</AdminPanelLayout>
            </ThemeProvider>
          </Web3Provider>
        </StoreProvider>
      </body>
    </html>
  );
}
