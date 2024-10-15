import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aarooshi",
  description: "The most ideal Website Development Company in Asia, Europe and North America.",
  keywords: "website development company, website development services, Best Website developer in Chicago, Best Website Developer in London, Best website developer in Ireland, e-commerce website, LMS website development, CRM website development, Informative website, Laravel Website, WordPress Website, React JS, Node JS, Next JS",
  
  // Open Graph Metadata
  openGraph: {
    type: "website", // or "article" depending on the page
    url: "https://aarooshi.com", // Add your actual website URL
    title: "Aarooshi - The most ideal Website Development Company",
    description: "Leading Website Development Company across Asia, Europe, and North America. Offering e-commerce, CRM, LMS, and Informative website solutions using Laravel, WordPress, React, and Next.js.",
    locale: "en_US", // or other locale if needed
    images: '/images/icon.jpg'
  },

  // Optional Twitter card metadata if you want to add it
  twitter: {
    // card: "summary_large_image", // add image link
    title: "Aarooshi - The most ideal Website Development Company",
    description: "Providing top-tier web development services across continents. Specializing in e-commerce, LMS, CRM, and more.",
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
