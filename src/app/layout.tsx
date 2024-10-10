import type { Metadata } from "next";
import "./globals.css";
import { M_PLUS_2 } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Web3Provider } from "@/providers/Web3Provider";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

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
    "A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "xplorer",
    description:
      "A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "xplorer",
    description:
      "A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness."
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
        <Web3Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AdminPanelLayout>{children}</AdminPanelLayout>
          </ThemeProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
