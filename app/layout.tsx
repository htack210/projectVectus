import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";
import MenuBar from "./components/MenuBar";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Project Vectus | Near-Future Science Fiction Thriller",
    template: "%s | Project Vectus",
  },
  description:
    "Project Vectus is a near-future science fiction series exploring ethical artificial intelligence, human consequence, and the dangers of technology advancing faster than conscience.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Project Vectus",
    description:
      "A near-future science fiction series examining ethical AI, covert experimentation, and the human cost of innovation.",
    url: "https://projectvectus.com",
    siteName: "Project Vectus",
    images: [
      {
        url: "https://projectvectus.com/book-one-cover.png",
        width: 1200,
        height: 630,
        alt: "Project Vectus book cover",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Vectus",
    description:
      "A near-future science fiction series exploring ethical artificial intelligence and human consequence.",
    images: ["https://projectvectus.com/book-one-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <MenuBar />
        {children}
      </body>
    </html>
  );
}
