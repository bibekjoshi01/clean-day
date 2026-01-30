"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="text-8xl font-serif font-bold text-primary/20">
              404
            </div>
            <Leaf className="w-20 h-20 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-lg text-foreground/70 font-sans mb-2 text-balance">
          Oops! It seems like this page has been cleared from our site, just
          like we clear the environment!
        </p>
        <p className="text-base text-foreground/60 font-sans mb-8 text-balance">
          The page you're looking for might have been moved or no longer exists.
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer px-8 py-3 h-auto text-base">
              Back to Home
            </Button>
          </Link>
          <Link href="/join-us">
            <Button
              variant="outline"
              className="border-primary/30 text-primary cursor-pointer px-8 py-3 h-auto text-base bg-transparent"
            >
              Join Our Mission
            </Button>
          </Link>
        </div>

        {/* Eco-friendly message */}
        <div className="mt-12 p-6 bg-card rounded-lg border border-border">
          <p className="text-sm text-foreground/70 font-sans">
            💚 <strong>Did you know?</strong> Just like nature, our website
            evolves. If you think this is an error, please{" "}
            <Link
              href="/join-us"
              className="text-primary hover:underline font-semibold"
            >
              contact us
            </Link>{" "}
            and help us keep our digital space clean!
          </p>
        </div>
      </div>
    </div>
  );
}
