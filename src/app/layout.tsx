import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";
import { person } from "@/content/profile";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Gajendhiran Mohan — Forward Deployed Engineer";
const description =
  "Gajendhiran Mohan builds AI-native products and the production systems beneath them: healthcare platforms, rule engines, APIs at 99.9% uptime, and multi-agent AI on LangGraph.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: person.name, url: person.github }],
  keywords: [
    "Gajendhiran Mohan",
    "Forward Deployed Engineer",
    "Product Engineer",
    "Applied AI",
    "LangGraph",
    "AWS Solutions Architect",
    "Full-stack engineer",
    "Chennai",
  ],
  alternates: { canonical: "/" },
  openGraph: { type: "profile", title, description, siteName: person.name, locale: "en_US", url: "/" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#151513" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.currentRole,
  worksFor: { "@type": "Organization", name: person.company },
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  alumniOf: "KSR College of Engineering",
  sameAs: [person.linkedin, person.github],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${schibsted.variable} ${plex.variable} antialiased`}>
      <body>
        {/* Enables reveal-on-scroll only when JS runs; without it every section is simply visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
