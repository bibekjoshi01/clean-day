"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="h-12 w-auto flex items-center">
            <Image
              src="/assets/logo.png"
              alt="CleanDay Logo"
              width={120}
              height={120}
              className="max-h-full w-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#about"
              scroll={true}
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/donate"
              className="text-foreground hover:text-primary transition-colors"
            >
              Donate
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => router.push("/join-us")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                About Us
              </a>
              <a
                href="/donate"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                Donate
              </a>
              <div className="px-3 py-2">
                <Button
                  onClick={() => router.push("/join-us")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
                >
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
