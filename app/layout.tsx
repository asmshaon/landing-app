import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import {
  DESCRIPTION,
  FULL_NAME,
  KNOWS_ABOUT,
  LINKEDIN_URL,
  ROLE,
  SHORT_NAME,
  SITE_URL,
} from "./seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const title = `${FULL_NAME} · ${ROLE}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: DESCRIPTION,
  applicationName: FULL_NAME,
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: FULL_NAME,
    title,
    description: DESCRIPTION,
    locale: "en_US",
    firstName: "Abu Saleh",
    lastName: "Muhammad Shaon",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// Structured data so search engines and AI assistants can identify the person behind the site.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: FULL_NAME,
      alternateName: SHORT_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/images/og-portrait.png`,
      jobTitle: ROLE,
      description: DESCRIPTION,
      address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
      sameAs: [LINKEDIN_URL],
      knowsAbout: KNOWS_ABOUT,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: FULL_NAME,
      description: DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
