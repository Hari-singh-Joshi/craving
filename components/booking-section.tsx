"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Calendar, Clock } from "lucide-react"
import Image from "next/image"

export default function BookingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="book"
      className="py-24 bg-gradient-to-br from-orange-50/50 via-background to-red-50/50 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-orange-200/20 to-red-200/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-200/20 to-orange-200/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-200 px-4 py-2">
            📅 Reserve Now
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground">
            Book Your <span className="gradient-text">Table</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reserve your table in advance and pre-order your favorite dishes for a seamless dining experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden shadow-2xl border-0">
            <div className="grid lg:grid-cols-5">
              {/* Left section */}
              <motion.div
                className="lg:col-span-2 relative hidden lg:block"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600">
                  <Image
                    src="/img/restaurant/showcase-2.png"
                    alt="Restaurant ambiance"
                    fill
                    className="object-cover mix-blend-multiply opacity-80"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Reserve Your Experience</h3>
                      <p className="text-white/90 mb-6">Book your table for an unforgettable dining journey</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/20 rounded-full p-2">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold">Call Us</p>
                          <p className="text-sm text-white/90">+91 98765 43210</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-white/20 rounded-full p-2">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold">Open Hours</p>
                          <p className="text-sm text-white/90">11:00 AM - 11:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right section - Form */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <CardContent className="p-8 lg:p-12">
                  <form
                    className="space-y-6"
                    action="https://formsubmit.co/hari.202104115@tulas.edu.in"
                    method="POST"
                  >
                    <input type="hidden" name="_format" value="table" />
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input name="Full Name" id="name" placeholder="Enter your full name" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input name="Email Address" id="email" type="email" placeholder="your.email@example.com" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input name="Phone Number" id="phone" placeholder="Your phone number" required />
                      </div>
                      <div>
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Input name="Number of Guests" id="guests" type="number" placeholder="2" min="1" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input name="Preferred Date" id="date" type="date" required />
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Input name="Preferred Time" id="time" type="time" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="requests">Special Requests</Label>
                      <Textarea
                        name="Special Requests"
                        id="requests"
                        placeholder="Any special requests, dietary requirements, or occasion details..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Reserve Table
                    </Button>
                  </form>
                </CardContent>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
