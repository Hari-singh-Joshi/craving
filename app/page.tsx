"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MenuSection from "@/components/menu-section"
import TestimonialsSection from "@/components/testimonials-section"
import BookingSection from "@/components/booking-section"
import LocationSection from "@/components/location-section"
import EventsSection from "@/components/events-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function CravingHutWebsite() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <TestimonialsSection />
      <BookingSection />
      <LocationSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
