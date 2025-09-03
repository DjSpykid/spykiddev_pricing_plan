"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Store, Shield, Users } from "lucide-react";

export default function HomePage() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Build Your Dream Online Store with{" "}
            <span className="text-primary">Spykiddev</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Launch a professional, fully customized e-commerce website tailored
            to your brand. Enjoy full ownership, powerful features, and
            dedicated support to grow your business.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 px-8"
          >
            <a href="/pricing">
              Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Custom E-Commerce</h3>
            <p className="text-muted-foreground">
              Get a branded storefront with your logo, colors, and style,
              optimized for mobile and SEO.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Full Ownership</h3>
            <p className="text-muted-foreground">
              Your store, your domain, your data—complete control with no hidden
              fees or restrictions.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
            <p className="text-muted-foreground">
              Personalized onboarding and ongoing support via WhatsApp, email,
              or chat to ensure success.
            </p>
          </div>
        </div>

        {/* Pricing Call to Action */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">
            Explore Our Affordable Plans
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Choose from our Starter or Pro plans, packed with powerful features
            to suit your business needs.
          </p>
          <Button
            asChild
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            <a href="/pricing">
              View Pricing Plans <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>

        {/* Final Call to Action */}
        <div className="text-center bg-muted py-12 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us now to discuss your vision and start building your
            professional e-commerce website with Spykiddev.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href="/contact">
              Contact Us Now <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
