"use client";

import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  const links = {
    solutions: [
      { href: "#", label: "FAQ Chatbot" },
      { href: "#", label: "Appointment Booking" },
      { href: "#", label: "Lead Generation" },
      { href: "#", label: "Order Tracking" }
    ],
    company: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" }
    ],
    contact: [
      { label: "support@tombotai.com" },
      { label: "1300 TOM BOT" }
    ]
  };

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo size="sm" className="mb-4" />
            <p className="text-muted-foreground">
              Empowering businesses with smart AI solutions
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {links.solutions.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              {links.contact.map((item) => (
                <li key={item.label} className="text-muted-foreground">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} TomBot AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}