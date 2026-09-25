"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactModal from "./ContactModal";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface antialiased">
      <Header onOpenContact={() => setContactOpen(true)} />
      <main className="flex-1 w-full pt-20">{children}</main>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
