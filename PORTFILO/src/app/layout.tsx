import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Cursor } from "@/components/ui/Cursor";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role} | Editorial Portfolio`,
  description:
    "Personal editorial portfolio of Nandhakumar N, B.Tech Artificial Intelligence and Data Science student at KPRIET. Exploring autonomous robotics, computer vision, vernacular computing, and creative technology.",
  keywords: [
    "Nandhakumar N",
    "AI Engineer",
    "Data Science",
    "Autonomous Robotics",
    "Computer Vision",
    "Kutty Labs",
    "Air Drawing AI",
    "Tamil Billing System",
    "KPRIET",
    "Portfolio"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "A physical piece of editorial paper brought to life digitally. Portfolio of Nandhakumar N.",
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "A physical piece of editorial paper brought to life digitally. Portfolio of Nandhakumar N.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F4EE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#C9382B] selection:text-[#FAF7F0] overflow-x-hidden min-h-screen">
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
