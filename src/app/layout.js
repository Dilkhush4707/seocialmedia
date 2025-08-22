import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import FloatingContact from "@/components/FloatingContact.jsx";
import NeonCursor from "@/components/NeonCursor";
import NeonCursorJaipur from "@/components/NeonCursorJaipur";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Page Title
  title: "Best Digital Marketing Company ",  

  // Meta Tags
  description: "SEOcial Media Solutions is a top digital marketing agency in Jaipur. We offer expert SEO, social media, and web development services to help your business grow.",
  keywords: "Digital marketing Jaipur, SEO company, Social media marketing, Web development, Online promotion Jaipur",
  authors: [{ name: "SEOcial Media Solutions" }],
  publisher: "SEOcial Media Solutions",
  
  // Canonical URL
  alternates: {
    canonical: "https://seocialmedia.in",
  },
  
  // Open Graph (Social Sharing)
  openGraph: {
    title: "Best Digital Marketing Company ",
    description: "SEOcial Media Solutions is a top digital marketing agency in Jaipur. We offer expert SEO, social media, and web development services to help your business grow.",
    url: "https://seocialmedia.in",
    siteName: "SEOcial Media Solutions",
    images: [
      {
        url: "https://seocialmedia.in/images/og-home.jpg", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "SEOcial Media Solutions - Digital Marketing Agency in Jaipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Other Meta Tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Header />
        {children}
        <NeonCursor />
        {/* <NeonCursorJaipur /> */}
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}