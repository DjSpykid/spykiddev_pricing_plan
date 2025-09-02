"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Shield, Headphones, Globe, Smartphone, CreditCard, Users, BarChart3 } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "₦25,000",
    description: "Perfect for small businesses starting their online journey",
    features: [
      "Custom domain name included",
      "Mobile-responsive design",
      "Up to 50 products",
      "Basic payment integration",
      "Email support",
      "SSL certificate",
      "Basic SEO setup",
      "Social media links",
    ],
    icon: Globe,
    popular: false,
  },
  {
    name: "Standard",
    price: "₦40,000",
    description: "Great for growing businesses with more features",
    features: [
      "Everything in Basic",
      "Up to 200 products",
      "Advanced payment options",
      "Live chat support",
      "Google Analytics setup",
      "Email marketing integration",
      "Customer reviews system",
      "Inventory management",
      "Order tracking system",
    ],
    icon: Zap,
    popular: false,
  },
  {
    name: "Business",
    price: "₦60,000",
    description: "Most popular choice for established businesses",
    features: [
      "Everything in Standard",
      "Unlimited products",
      "Multi-currency support",
      "Priority phone support",
      "Advanced SEO optimization",
      "Social media integration",
      "Customer loyalty program",
      "Advanced analytics dashboard",
      "Automated email campaigns",
      "Backup & security features",
    ],
    icon: Star,
    popular: true,
  },
  {
    name: "Premium",
    price: "₦90,000",
    description: "Advanced features for scaling businesses",
    features: [
      "Everything in Business",
      "Multi-vendor marketplace",
      "Advanced reporting tools",
      "24/7 dedicated support",
      "Custom integrations",
      "API access",
      "Advanced security features",
      "Performance optimization",
      "Custom checkout process",
      "Wholesale pricing options",
      "Advanced shipping options",
    ],
    icon: Shield,
    popular: false,
  },
  {
    name: "Ultimate",
    price: "₦150,000",
    description: "Enterprise-level solution with everything included",
    features: [
      "Everything in Premium",
      "White-label solution",
      "Custom mobile app",
      "Dedicated account manager",
      "Custom development hours",
      "Advanced AI features",
      "Multi-location support",
      "Enterprise integrations",
      "Custom training sessions",
      "Priority feature requests",
      "Advanced compliance tools",
      "Unlimited customizations",
    ],
    icon: Users,
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Empower Your Business with <span className="text-primary">Affordable E-Commerce</span> Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Flexible pricing plans tailored for Nigerian entrepreneurs. Start your online business today with
            professional e-commerce websites that drive sales.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <Card
                key={plan.name}
                className={`relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  plan.popular ? "border-primary shadow-lg scale-105 bg-card" : "hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                    <span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="text-sm text-pretty">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full transition-all duration-300 ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    }`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Mobile Optimized</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Secure Payments</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Analytics Included</span>
            </div>
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg max-w-2xl mx-auto">
            <p className="text-lg font-medium mb-2">Ready to start your e-commerce journey?</p>
            <p className="text-muted-foreground text-pretty">
              Join hundreds of Nigerian entrepreneurs who have transformed their businesses with our professional
              e-commerce solutions. Get started today and watch your sales grow!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
