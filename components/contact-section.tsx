"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, MessageCircle, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)

 

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-200 px-4 py-2">
            💬 Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our menu, want to make a reservation, or need catering services? We'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-orange-600 rounded-full p-3">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Call Us</h4>
                        <a href="tel:+919997348502" className="text-gray-400">+91 99973 48502</a>
                        <p className="text-sm text-orange-600">Available 11 AM - 11 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-600 rounded-full p-3">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email Us</h4>
                        <p className="text-muted-foreground">info@cravinghut.com</p>
                        <p className="text-sm text-blue-600">We reply within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-600 rounded-full p-3">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">WhatsApp</h4>
                        <a href="https://wa.me/919997348502" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                            +91 99973 48502
                          </a>

                        <p className="text-sm text-green-600">Quick responses</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                  <form className="space-y-6" 
                  action="https://formsubmit.co/hari.202104115@tulas.edu.in"
                  method="POST">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <Label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                          Full Name
                        </Label>
                        <Input
                          id="contact-name"
                          placeholder="Enter your full name"
                          name="full name"
                          className="mt-2 border-border focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <Label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                          Email Address
                        </Label>
                        <Input
                          id="contact-email"
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          className="mt-2 border-border focus:border-orange-500 focus:ring-orange-500"
                          required
                        />
                      </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <Label htmlFor="contact-phone" className="text-sm font-medium text-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="contact-phone"
                          name="phone"
                          placeholder="Your phone number"
                          className="mt-2 border-border focus:border-orange-500 focus:ring-orange-500"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                      >
                        <Label htmlFor="contact-subject" className="text-sm font-medium text-foreground">
                          Subject
                        </Label>
                        <Input
                          id="contact-subject"
                          placeholder="Subject of your message"
                          name="subject"
                          className="mt-2 border-border focus:border-orange-500 focus:ring-orange-500"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <Label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        className="mt-2 border-border focus:border-orange-500 focus:ring-orange-500 min-h-[120px]"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        size="lg"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
