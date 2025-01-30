"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, Calendar, MessageSquare, ShoppingCart, Users, Zap } from "lucide-react";
import { Logo } from "./components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Logo size="lg" className="mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              TomBot AI Solutionsss
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Empowering Small Businesses with Smart AI Solutions
            </p>
            <Button size="lg" className="text-lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI-Powered Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <MessageSquare className="h-12 w-12 mb-4 text-chart-1" />
              <h3 className="text-xl font-semibold mb-2">FAQ & General Q&A Chatbot</h3>
              <p className="text-muted-foreground">
                Automate customer support with AI-powered responses to common questions
              </p>
            </Card>
            <Card className="p-6">
              <Calendar className="h-12 w-12 mb-4 text-chart-2" />
              <h3 className="text-xl font-semibold mb-2">Appointment Booking Bot</h3>
              <p className="text-muted-foreground">
                Streamline scheduling with automated booking and reminder systems
              </p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 mb-4 text-chart-3" />
              <h3 className="text-xl font-semibold mb-2">Lead Generation Bot</h3>
              <p className="text-muted-foreground">
                Convert visitors into customers with intelligent conversation flows
              </p>
            </Card>
            <Card className="p-6">
              <ShoppingCart className="h-12 w-12 mb-4 text-chart-4" />
              <h3 className="text-xl font-semibold mb-2">Order Tracking Bot</h3>
              <p className="text-muted-foreground">
                Keep customers informed with real-time order updates
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 mb-4 text-chart-5" />
              <h3 className="text-xl font-semibold mb-2">Social Media Chatbots</h3>
              <p className="text-muted-foreground">
                Engage customers across all major social platforms
              </p>
            </Card>
            <Card className="p-6">
              <Bot className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Custom AI Solutions</h3>
              <p className="text-muted-foreground">
                Tailored AI solutions for your specific business needs
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-3xl font-bold mb-6">$50<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li>✓ Basic chatbot with FAQ</li>
                <li>✓ Appointment booking</li>
                <li>✓ Website integration</li>
                <li>✓ Social media integration</li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>
            <Card className="p-8 border-primary relative overflow-hidden">
              <div className="absolute top-5 right-5 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="text-3xl font-bold mb-6">$100<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li>✓ Advanced AI features</li>
                <li>✓ Sales assistant</li>
                <li>✓ CRM integration</li>
                <li>✓ Analytics dashboard</li>
                <li>✓ Priority support</li>
                <li className="font-medium text-primary">Website Development:</li>
                <li className="pl-4">✓ Custom website design</li>
                <li className="pl-4">✓ Mobile responsive</li>
                <li className="pl-4">✓ SEO optimization</li>
                <li className="pl-4">✓ Monthly updates</li>
              </ul>
              <Button className="w-full" variant="default">Get Started</Button>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-6">Custom</p>
              <ul className="space-y-4 mb-8">
                <li>✓ Custom AI automation</li>
                <li>✓ API integrations</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Dedicated support</li>
                <li>✓ Custom branding</li>
                <li>✓ Multi-site support</li>
              </ul>
              <Button className="w-full">Contact Sales</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the AI revolution and streamline your customer interactions today
          </p>
          <Button size="lg" className="text-lg">
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}