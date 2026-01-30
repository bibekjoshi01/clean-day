import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Leaf,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Github,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-xl text-card-foreground">
                CleanDay
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Keeping Earth Green, One Action at a Time. Join our mission to
              create a cleaner and greener Nepal.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61553712689948"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="p-2 bg-transparent"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/clean-day-global"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="p-2 bg-transparent"
                >
                  <Linkedin className="h-4 w-4" />{" "}
                </Button>
              </a>
              {/* Github */}
              <a
                href="https://github.com/bibekjoshi01/clean-day"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="p-2 bg-transparent"
                >
                  <Github className="h-4 w-4" />{" "}
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg text-card-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/join-us"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Join Us
                </a>
              </li>
              <li>
                <a
                  href="/donate"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg text-card-foreground">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  Kathmandu, Nepal
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  info@cleandayglobal.org
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  +977-9822502095
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg text-card-foreground">
              Stay Updated
            </h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for updates on events and initiatives.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-border"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CleanDay. All rights reserved. | Made with 💚 for a greener
            World
          </p>
        </div>
      </div>
    </footer>
  );
}
