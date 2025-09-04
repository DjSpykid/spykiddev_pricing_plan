"use client";
export default function Footer() {
  return (
    <footer className="bg-muted py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Footnote */}
        <div className="mb-8 bg-muted rounded-lg p-6 border border-border shadow-sm">
          <p className="text-lg font-medium mb-2 text-primary">
            Done-for-you deployment
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Simply provide your logo and brand colors we
            handle setup, configuration, and launch.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold text-primary">Spykiddev</h3>
          <p className="text-sm text-muted-foreground">
            Building professional e-commerce solutions for businesses of all
            sizes.
          </p>
        </div>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="/services"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Spykiddev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}