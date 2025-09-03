"use client";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact <span className="text-primary">Spykiddev</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to start your e-commerce journey? Reach out
            to us via email or WhatsApp, and we’ll get back to you promptly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="text-primary">📧</span> Email:{" "}
                <a
                  href="mailto:opanugaaladetomiwa@gmail.com"
                  className="hover:text-primary"
                >
                  opanugaaladetomiwa@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">📍</span> Address: Ibadan, Nigeria
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">📱</span> Phone:{" "}
                <a href="tel:+2341234567890" className="hover:text-primary">
                  +234 906 965 0658
                </a>
              </p>
            </div>
            <Button
              asChild
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              <a
                href="https://wa.me/+2349069650658"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
