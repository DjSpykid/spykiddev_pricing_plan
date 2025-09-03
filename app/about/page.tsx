
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Store, Shield, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-primary">Spykiddev</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At Spykiddev, we empower businesses to thrive online with custom-built, 
            powerful e-commerce solutions tailored to your unique vision.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Story</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center">
            Spykiddev was founded with a passion for helping businesses in Nigeria and beyond 
            establish a strong online presence. Based in Ibadan, we specialize in creating 
            professional, user-friendly e-commerce websites that drive sales and growth. 
            Our team combines technical expertise with a deep understanding of local markets 
            to deliver solutions that are not only visually stunning but also packed with 
            advanced tools like SEO optimization, analytics, and seamless payment integrations. 
            With Spykiddev, you get full ownership of your store and personalized support 
            every step of the way.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Spykiddev?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                  <Store className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-center">Tailored Solutions</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                We design custom e-commerce stores that reflect your brand’s identity, 
                with mobile-responsive layouts and powerful features to maximize sales.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                  <Shield className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-center">Full Ownership</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Your store, domain, and data belong entirely to you, 
                with no hidden fees or restrictions, ensuring complete control.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                  <Users className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-center">Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                From onboarding to ongoing support, we’re here via WhatsApp, email, 
                or chat to ensure your store’s success.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted py-12 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your E-Commerce Journey?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let’s bring your online store to life. Contact us today to discuss your vision 
            and choose the perfect plan for your business.
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
