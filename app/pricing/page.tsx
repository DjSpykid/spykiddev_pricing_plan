"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Rocket, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const plans = [
  {
    name: "Starter",
    price: "₦5,000",
    description:
      "A solid launchpad for emerging brands seeking professional online presence.",
    features: [
      "Custom storefront aligned with your brand identity (logo, colors, typography)",
      "Unlimited product listings with full support for variations, discounts, and SEO-optimized slugs",
      "Integrated checkout with Credo, Paystack, or Flutterwave",
      "Mobile-responsive, SSL-secured design",
      "Homepage modules: Featured, Best Sellers, Sales, and New Arrivals",
      "Search + smart filtering (in-stock, discounted, featured)",
      "Customer order tracking with downloadable invoices",
      "Promotions manager: flash sales & discount codes with expiry",
      "Customer ledger: purchase history, contact info, order value",
      "Store pickup & delivery setup with flexible pricing",
      "Google & email authentication",
      "Real-time order notifications via email for admins",
      "Branded business email setup (e.g. info@yourstore.com)",
      "Full ownership — your store and domain belong entirely to you",
      "Personalized onboarding session for smooth launch",
      "Email & chat support",
    ],
    note: "Currently in development — launching soon for small businesses.",
    icon: Rocket,
    popular: false,
    disabled: true,
  },
  {
    name: "Pro",
    prices: {
      monthly: "₦10,000",
      quarterly: "₦27,000",
      yearly: "₦100,000",
    },
    savings: {
      quarterly: "Save 10%",
      yearly: "Save ~17%",
    },
    promo: {
      text: "Launch Offer – ₦9,000 for first 5 customers, valid till Dec 31, 2025.",
      active: true,
    },
    description:
      "Advanced features, deeper analytics, and priority support for scaling businesses.",
    features: [
      "Everything in Starter",
      "Unlimited product listings with advanced categorisation, smart filters, and SEO-ready architecture",
      "Comprehensive analytics dashboard (conversion, revenue, returns, AOV)",
      "Sales intelligence: top products, status distribution, time-based filtering",
      "SEO optimisation suite: metadata, semantic slugs, search readiness",
      "Marketing accelerators: vouchers, flash sales & discount codes (per product)",
      "Customer insights: track repeat buyers and purchase history",
      "Delivery orchestration with rider/agent assignment workflow",
      "Smart notifications: instant alerts via WhatsApp and email for new orders",
      "Order management extras: admins can create orders manually for physical store, WhatsApp, Instagram, TikTok, Facebook, or Snapchat",
      "Export orders and reports as CSV for offline use",
      "Premium onboarding session + personal support calls (Zoom, Google Meet, or phone)",
      "Branded business email setup (e.g. hello@yourbrand.com)",
      "Full ownership — your store and domain belong entirely to you",
    ],
    icon: Crown,
    popular: true,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<
    "monthly" | "quarterly" | "yearly"
  >("monthly");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get a professional e-commerce website with{" "}
            <span className="text-primary">advanced tools</span> to grow sales
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full ownership, branded email, and personalized marketing support
            included. Whether you’re just launching or scaling to new heights,
            our plans deliver everything you need to dominate online.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-8">
          <Tabs
            defaultValue="monthly"
            onValueChange={(value) =>
              setBillingCycle(value as "monthly" | "quarterly" | "yearly")
            }
          >
            <TabsList className="grid w-[300px] grid-cols-3">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Pricing Structure Explanation */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Your chosen plan (Starter or Pro) includes hosting and all website
            features. The only extra cost is your domain name (e.g., .com,
            .com.ng, .shop), which you purchase and renew yearly through a
            registrar.{" "}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="p-0 text-primary">
                  Learn More <Info className="w-4 h-4 ml-1" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Pricing Breakdown</DialogTitle>
                  <DialogDescription>
                    Here’s how our pricing works:
                    <ul className="mt-4 space-y-3 text-left">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span>
                          <strong>One-Time Setup Fee</strong>: Pay ₦5,000
                          (Starter) or as per plan (Pro) to set up your website,
                          including hosting, design, and all features listed in
                          your plan.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span>
                          <strong>Domain Cost</strong>: You’ll purchase your
                          domain (e.g., .com, .com.ng, .shop) upfront through a
                          registrar. Costs vary by domain type (e.g., ~₦7,500
                          for .com.ng, ~₦10,000 for .com).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span>
                          <strong>Hosting Included</strong>: Your plan includes
                          hosting, so you only pay the setup fee and your yearly
                          domain cost no extra monthly hosting fees.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5" />
                        <span>
                          <strong>Annual Domain Renewal</strong>: Renew your
                          domain yearly through the registrar to keep your
                          website active.
                        </span>
                      </li>
                    </ul>
                    <p className="mt-4">
                      Need help?{" "}
                      <a
                        href="/contact"
                        className="text-primary hover:underline"
                      >
                        Contact us
                      </a>{" "}
                      for personalized support.
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  plan.popular
                    ? "border-primary shadow-lg scale-105 bg-card"
                    : plan.disabled
                    ? "opacity-60 pointer-events-none bg-muted"
                    : "hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                {plan.disabled && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white">
                    Coming Soon
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plan.popular
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.name === "Pro"
                      ? plan.prices[billingCycle]
                      : plan.price}
                    <span className="text-sm font-normal text-muted-foreground">
                      {billingCycle === "monthly"
                        ? "/month"
                        : billingCycle === "quarterly"
                        ? "/quarter"
                        : "/year"}
                    </span>
                  </div>
                  {plan.name === "Pro" && plan.savings[billingCycle] && (
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      {plan.savings[billingCycle]}
                    </Badge>
                  )}
                  <CardDescription className="text-sm">
                    {plan.description}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground mt-2">
                    + Yearly domain cost
                  </p>
                  {plan.note && (
                    <p className="text-xs text-muted-foreground mt-2 italic">
                      {plan.note}
                    </p>
                  )}
                  {plan.promo?.active && (
                    <Badge className="mt-3 bg-green-500 text-white text-xs sm:text-sm font-medium py-1 px-3 max-w-[90%] mx-auto">
                      {plan.promo.text}
                    </Badge>
                  )}
                </CardHeader>

                <CardContent className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </CardContent>

                {!plan.disabled && (
                  <CardFooter>
                    <Button
                      asChild
                      className={`w-full transition-all duration-300 ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      }`}
                    >
                      <a href="/contact">Choose {plan.name}</a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
















