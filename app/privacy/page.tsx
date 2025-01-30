"use client";

import { Card } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
        
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Australian Privacy Act Compliance</h2>
          <p className="text-muted-foreground mb-4">
            TomBot AI Solutions operates in full compliance with the Australian Privacy Act (1988) 
            and is committed to protecting your personal information. This policy outlines how we 
            collect, use, and protect your data.
          </p>
        </Card>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Collection and Usage</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• We collect only necessary information required for providing our AI chatbot services</li>
              <li>• Your data is stored securely within Australian jurisdiction</li>
              <li>• We do not sell or share your personal information with third parties</li>
              <li>• All data collection complies with Australian consumer protection regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security Measures</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Implementation of industry-standard encryption protocols</li>
              <li>• Regular security audits and updates</li>
              <li>• Strict access controls and authentication measures</li>
              <li>• Continuous monitoring for potential security threats</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Right to access your personal information</li>
              <li>• Right to correct inaccurate information</li>
              <li>• Right to request data deletion</li>
              <li>• Right to withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For any privacy-related queries or requests, please contact our Privacy Officer at:
              <br />
              Email: privacy@tombotai.com
              <br />
              Phone: 1300 TOM BOT
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}