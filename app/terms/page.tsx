"use client";

import { Card } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Terms of Service</h1>

        <div className="space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Service Restrictions</h2>
            <p className="text-muted-foreground mb-4">
              TomBot AI Solutions does not provide AI chatbot solutions for the following restricted industries:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Medical & Healthcare (due to strict privacy laws like Australian Privacy Act & HIPAA)</li>
              <li>• Gambling & Betting platforms</li>
              <li>• Financial Trading, Investing & Cryptocurrency Services</li>
              <li>• Weapons, Ammunition, and Illegal Services</li>
            </ul>
          </Card>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Compliance Requirements</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• All chatbots must comply with the Australian Privacy Act (1988)</li>
              <li>• Adherence to the Spam Act (2003) - no unsolicited messages</li>
              <li>• Clear disclosure of automated responses in AI interactions</li>
              <li>• Compliance with Australian Consumer Law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Service Terms</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Services are provided on a subscription basis</li>
              <li>• Payment terms are monthly or as agreed in writing</li>
              <li>• 30-day notice required for service cancellation</li>
              <li>• Service modifications require written agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Usage and Storage</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Client data remains the property of the client</li>
              <li>• Data is stored securely within Australian jurisdiction</li>
              <li>• Regular backups are maintained for service continuity</li>
              <li>• Data deletion upon service termination</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Service Level Agreement</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• 99.9% uptime guarantee for chatbot services</li>
              <li>• 24/7 monitoring of service performance</li>
              <li>• Response time guarantees based on subscription level</li>
              <li>• Regular maintenance and updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Modifications to Terms</h2>
            <p className="text-muted-foreground">
              TomBot AI Solutions reserves the right to modify these terms of service with 30 days notice to clients. 
              Continued use of services after modifications constitutes acceptance of updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}