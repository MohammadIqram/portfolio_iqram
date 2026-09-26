import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

export const metadata: Metadata = {
  title: "Mohammad Iqram — Creative Product Designer & Full-Stack Engineer",
  description:
    "Tactile Clay Studio: Senior Product Designer & Full-Stack Architect blending playful 3D aesthetics with enterprise-grade engineering. Volumetric design tokens, micro-interactions, and high-concurrency systems.",
  keywords: [
    "Product Designer",
    "Full-Stack Engineer",
    "Claymorphism",
    "Design Systems",
    "Next.js",
    "TypeScript",
    "UI/UX Design",
    "Frontend Architect",
  ],
  authors: [{ name: "Mohammad Iqram" }],
  openGraph: {
    title: "Mohammad Iqram — Creative Product Designer & Full-Stack Engineer",
    description: "Tactile Clay Studio: Sculpting volumetric software that invites human touch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="selection:bg-primary-container selection:text-on-primary-container">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
