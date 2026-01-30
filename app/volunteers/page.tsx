"use client";

import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { leadership, volunteers } from "./data";

export default function VolunteersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/80 to-primary/60 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
            Our Green Warriors Community
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-balance">
            Be part of CleanDay's mission to keep Earth clean and green. Find
            your perfect role and make a difference today!
          </p>
          <p className="text-base md:text-lg text-primary-foreground/80 font-sans">
            <strong>Our Motto:</strong> Act. Clean. Inspire.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-foreground">
            Our Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member) => (
              <div
                key={member.id}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative w-full h-64 bg-gray-200">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3 font-sans">
                    {member.position}
                  </p>

                  <p className="text-foreground/70 text-sm mb-4 font-sans leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-foreground/70 text-sm font-sans">
                      <Mail className="w-4 h-4 text-primary" />
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70 text-sm font-sans">
                      <Phone className="w-4 h-4 text-primary" />
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:text-primary transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VolunteersSection - Role Wise */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center text-foreground">
            Meet Our Team
          </h2>
          <p className="text-center text-foreground/70 mb-12 font-sans max-w-2xl mx-auto">
            Our passionate volunteers dedicated to making a difference
          </p>

          {Object.entries(volunteers).map(([roleTitle, roleVolunteers]) => (
            <div key={roleTitle} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-primary flex items-center gap-2">
                <div className="w-1 h-8 bg-primary rounded"></div>
                {roleTitle}
              </h3>

              {roleTitle === "General Member (Green Warrior)" ? (
                /* Compact Grid for General Members */
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {roleVolunteers.map((volunteer) => (
                    <div key={volunteer.id} className="text-center group">
                      <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden mb-2 hover:shadow-lg transition-all">
                        <Image
                          src={volunteer.image || "/placeholder.svg"}
                          alt={volunteer.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-serif font-bold text-foreground text-sm">
                        {volunteer.name}
                      </h4>
                    </div>
                  ))}
                </div>
              ) : (
                /* Detailed Grid for Other Roles */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {roleVolunteers.map((volunteer) => (
                    <div
                      key={volunteer.id}
                      className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all hover:border-primary/30"
                    >
                      <div className="relative w-full h-48 bg-gray-200">
                        <Image
                          src={volunteer.image || "/placeholder.svg"}
                          alt={volunteer.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-5">
                        <h4 className="text-lg font-serif font-bold text-foreground mb-1">
                          {volunteer.name}
                        </h4>
                        <p className="text-sm text-primary font-semibold mb-3 font-sans">
                          {volunteer.role}
                        </p>

                        <div className="space-y-2 mb-4 text-xs">
                          <div className="flex items-center gap-2 text-foreground/70 font-sans">
                            <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <a
                              href={`mailto:${volunteer.email}`}
                              className="hover:text-primary transition-colors break-all"
                            >
                              {volunteer.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-foreground/70 font-sans">
                            <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <a
                              href={`tel:${volunteer.phone}`}
                              className="hover:text-primary transition-colors"
                            >
                              {volunteer.phone}
                            </a>
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-2 pt-4 border-t border-border">
                          {volunteer.social.facebook && (
                            <a
                              href={volunteer.social.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/60 hover:text-primary transition-colors"
                            >
                              <Facebook className="w-4 h-4" />
                            </a>
                          )}
                          {volunteer.social.instagram && (
                            <a
                              href={volunteer.social.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/60 hover:text-primary transition-colors"
                            >
                              <Instagram className="w-4 h-4" />
                            </a>
                          )}
                          {volunteer.social.linkedin && (
                            <a
                              href={volunteer.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/60 hover:text-primary transition-colors"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                          {volunteer.social.twitter && (
                            <a
                              href={volunteer.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/60 hover:text-primary transition-colors"
                            >
                              <Twitter className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
