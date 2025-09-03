"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Crown } from "lucide-react"

export default function Services() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span> at Spykiddev
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At Spykiddev, we provide professional e-commerce solutions tailored to your business needs. From startups to scaling enterprises, our services empower you to dominate online with custom storefronts and advanced tools.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-muted text-muted-foreground">
                <Rocket className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-bold">Starter Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-card-foreground">
                Perfect for emerging brands, our Starter Plan offers a custom storefront, unlimited product listings, integrated checkout, and mobile-responsive design to launch your online presence.
              </p>
              <ul className="space-y-2 text-sm text-card-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span> Custom storefront with your branding
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span> Integrated payment gateways
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span> SEO-optimized product slugs
                </li>
              </ul>
              <Button asChild className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <a href="/pricing">Learn More</a>
              </Button>
            </CardContent>
          </Card>
          <Card className="relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                <Crown className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-bold">Pro Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-card-foreground">
                Designed for scaling businesses, the Pro Plan includes advanced analytics, marketing tools, and priority support to maximize your e-commerce success.
              </p>
              <ul className="space-y-2 text-sm text-card-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span> Comprehensive analytics dashboard
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span> Marketing accelerators and campaigns
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span> Dedicated WhatsApp/Telegram support
                </li>
              </ul>
              <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="/pricing">Learn More</a>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium mb-4">
            Ready to elevate your online store?
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="/contact">Get Started with Spykiddev</a>
          </Button>
        </div>
      </div>
    </section>
  );
}