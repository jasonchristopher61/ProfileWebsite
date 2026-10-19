import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";
import { DeferredWidgets } from "@/components/DeferredWidgets";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://jasonchristopher61.github.io/ProfileWebsite";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jason Christopher — Senior Full-Stack Developer",
  description:
    "Jason Christopher is a Senior Full-Stack Developer (Angular, React, Java, Spring Boot, AWS) with 7+ years of experience building cloud-native systems — and a creative explorer beyond the code.",
  openGraph: {
    title: "Jason Christopher — Senior Full-Stack Developer",
    description:
      "7+ years building cloud-native systems with Java, Spring Boot, Angular, React, and AWS. Engineer, problem solver, creative explorer.",
    url: siteUrl,
    siteName: "Jason Christopher",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Christopher — Senior Full-Stack Developer",
    description: "7+ years building cloud-native systems with Java, Spring Boot, Angular, React, and AWS.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <head>
        {/* Runs before paint to avoid a flash of the wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:rounded-lg focus:bg-accent-violet focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <CursorGlow />
          <ScrollProgress />
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <DeferredWidgets />
        </ThemeProvider>
      </body>
    </html>
  );
}
