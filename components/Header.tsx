"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-background border-b border-border py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">S</span>
          </div>
          <h1 className="text-2xl font-bold">
            <a href="/" className="text-primary hover:underline">
              Spykiddev
            </a>
          </h1>
        </div>
        <nav className="hidden sm:flex gap-6">
          <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="sm:hidden mt-4 flex flex-col items-center gap-4">
          <a
            href="/pricing"
            className="text-muted-foreground hover:text-primary transition-colors text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="/contact"
            className="text-muted-foreground hover:text-primary transition-colors text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="/about"
            className="text-muted-foreground hover:text-primary transition-colors text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
        </nav>
      )}
    </header>
  )
}