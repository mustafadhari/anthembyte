import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AnthemByte | Web Development & Automation",
  description: "Neo Brutalist portfolio for AnthemByte, a web development and automation agency building high-performance digital experiences.",
  keywords: ["Web Development", "Automation", "Next.js", "React", "Neo Brutalism", "Agency", "Software Engineering"],
  authors: [{ name: "AnthemByte Team" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AnthemByte | Web Development & Automation",
    description: "Neo Brutalist portfolio for AnthemByte, a web development and automation agency building high-performance digital experiences.",
    url: "https://anthembyte.com",
    siteName: "AnthemByte",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://anthembyte.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AnthemByte Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnthemByte | Web Development & Automation",
    description: "Neo Brutalist portfolio for AnthemByte, a web development and automation agency.",
    creator: "@anthembyte",
    images: ["https://anthembyte.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${spaceMono.variable} antialiased bg-background text-foreground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
