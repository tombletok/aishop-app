"use client";

import { Card } from "@/components/ui/card";
import { Bot, Users, Shield, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About TomBot AI Solutions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8">
            <Bot className="h-12 w-12 mb-6 text-primary" />
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              At TomBot AI Solutions, we're dedicated to empowering small businesses with cutting-edge AI technology. 
              Our mission is to make advanced AI automation accessible and affordable for businesses of all sizes.
            </p>
          </Card>
          
          <Card className="p-8">
            <Target className="h-12 w-12 mb-6 text-chart-1" />
            <h2 className="text-2xl font-semibold mb-4">Our Focus</h2>
            <p className="text-muted-foreground">
              We specialize in creating AI-powered chatbots and automation solutions tailored for Australian small businesses, 
              helping them streamline operations and enhance customer experience.
            </p>
          </Card>
          
          <Card className="p-8">
            <Users className="h-12 w-12 mb-6 text-chart-2" />
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-muted-foreground">
              Our team consists of experienced AI specialists, developers, and customer success managers 
              dedicated to helping your business succeed with AI automation.
            </p>
          </Card>
          
          <Card className="p-8">
            <Shield className="h-12 w-12 mb-6 text-chart-3" />
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground">
              We're committed to maintaining the highest standards of data security and privacy, 
              ensuring full compliance with Australian regulations while delivering innovative AI solutions.
            </p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Industries We Serve</h2>
          <p className="text-muted-foreground mb-8">
            We provide AI solutions for a wide range of industries, including e-commerce, 
            retail, service-based businesses, and local enterprises. Our solutions are 
            designed to meet the specific needs of each sector while ensuring compliance 
            with all relevant regulations.
          </p>
        </div>
      </div>
    </div>
  );
}