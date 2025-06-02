"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from "lucide-react"

export default function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactItems = [
    {
      icon: <MapPin className="h-6 w-6 text-orange-600" />,
      title: "Address",
      content: "BFIT road, Sudhowala, Dehradun, Uttarakhand 248015",
      action: "Get Directions",
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Opening Hours",
      content: (
        <div className="space-y-1">
          <p className="text-foreground font-medium">Monday - Friday: 11:00 AM - 11:00 PM</p>
          <p className="text-foreground font-medium">Saturday - Sunday: 10:00 AM - 11:30 PM</p>
        </div>
      ),
    },
    {
      icon: <Phone className="h-6 w-6 text-orange-600" />,
      title: "Contact",
      content: (
        <div className="space-y-1">
          <p className="text-foreground">Phone: +91 98765 43210</p>
          <p className="text-foreground">WhatsApp: +91 98765 43210</p>
        </div>
      ),
      action: "Call Now",
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-600" />,
      title: "Email",
      content: "info@cravinghut.com",
      action: "Send Email",
    },
  ]

  return (
    <section className="py-24 bg-background overflow-x-hidden" ref={ref} >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-200 px-4 py-2">
            📍 Find Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground">
            Our <span className="gradient-text">Location</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Dehradun, we're easily accessible and ready to serve you the best culinary
            experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="overflow-hidden border-0 shadow-xl">
  <CardContent className="p-0">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.2030295004074!2d77.9335596750222!3d30.345179304260427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d50075d948bf%3A0xe7d52bbdb07b3017!2sCraving%20hut!5e0!3m2!1sen!2sin!4v1748771291393!5m2!1sen!2sin"
      width="100%"
      height="320"
      className="w-full h-80 border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </CardContent>
</Card>

          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                {contactItems.map((item, index) => (
                  <motion.div key={index}>
                    <motion.div
                      className="flex items-start gap-4 py-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                        <div className="text-muted-foreground mb-3">{item.content}</div>
                        {item.action && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-orange-200 hover:bg-orange-50 hover:border-orange-300 text-orange-600"
                          >
                            {item.action}
                            <ExternalLink className="h-3 w-3 ml-2" />
                          </Button>
                        )}
                      </div>
                    </motion.div>
                    {index < contactItems.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                        className="origin-left"
                      >
                        <Separator />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <Button
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg"
                size="lg"
              >
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+919997348502">Call Now</a>
              </Button>
              <Button
                variant="outline"
                className="border-orange-200 hover:bg-orange-50 hover:border-orange-300 text-orange-600"
                size="lg"
              >
                <Mail className="h-4 w-4 mr-2" />
               <a href="mailto:hari.202104115@tulas.edu.in"> Email Us</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
