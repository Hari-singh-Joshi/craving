"use client"

import { motion } from "framer-motion"
import { ChefHat, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "menu", label: "Menu" },
    { id: "events", label: "Events" },
  ]

  const legalLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" },
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-orange-600/10 to-red-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <ChefHat className="h-8 w-8 text-orange-500" />
                </motion.div>
                <span className="text-2xl font-bold font-playfair">Craving Hut</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Discover a journey of flavors at our Craving Hut in the heart of Dehradun. Where tradition meets
                innovation in every dish.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={social.href}
                      className={`text-gray-400 ${social.color} transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700`}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 font-playfair">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 font-playfair">Legal</h3>
              <div className="space-y-3">
                {legalLinks.map((link, index) => (
                  <motion.div key={index} whileHover={{ x: 5 }}>
                    <Link href={link.href} className="block text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6 font-playfair">Contact Info</h3>
              <div className="space-y-4">
                <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                  <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">BFIT road, Sudhowala, Dehradun, Uttarakhand 248015</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                  <Phone className="h-5 w-5 text-orange-500" />
                  <a href="tel:+919997348502" className="text-gray-400">+91 99973 48502</a>

                </motion.div>
                <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-400">info@cravinghut.com</span>
                </motion.div>
              </div>

              {/* Opening Hours */}
              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3">Opening Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mon - Fri</span>
                    <span className="text-white">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sat - Sun</span>
                    <span className="text-white">10:00 AM - 11:30 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>&copy; {new Date().getFullYear()} Craving Hut. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Designed By <Heart className="h-4 w-4 text-red-500" /> <a href="https://my-portfolio-i81d.vercel.app/">Hari Singh Joshi</a>
              </span>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
