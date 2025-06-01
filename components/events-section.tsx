"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, ArrowRight, Sparkles, Gift, Briefcase } from "lucide-react"
import Image from "next/image"

const events = [
  {
    title: "Summer Wine Festival",
    date: "dec 15, 2025",
    time: "7:00 PM - 11:00 PM",
    description: "Join us for an evening of fine wines and gourmet food pairings with live music.",
    image: "/img/restaurant/showcase-7.webp",
    price: "₹250 per person",
    featured: true,
  },
  {
    title: "Gourmet Tasting Night",
    date: "oct 22, 2025",
    time: "6:30 PM - 10:00 PM",
    description: "Experience our chef's special tasting menu with unique flavors and presentations.",
    image: "/img/restaurant/showcase-4.webp",
    price: "₹300 per person",
  },
]

const eventTypes = [
  {
    icon: <Gift className="h-8 w-8 text-orange-600" />,
    title: "Birthday & Celebrations",
    description:
      "Make your special day memorable with our celebration packages. We offer customized decorations, special menus, and personalized cakes.",
    features: ["Custom Decorations", "Special Menu", "Personalized Cake", "Photography"],
  },
  {
    icon: <Briefcase className="h-8 w-8 text-orange-600" />,
    title: "Corporate Events",
    description:
      "Professional venue for your business meetings and team events. We provide projector facilities, customized menus, and private dining areas.",
    features: ["Projector Setup", "Private Dining", "Custom Catering", "WiFi Access"],
  },
  {
    icon: <Users className="h-8 w-8 text-orange-600" />,
    title: "Private Gatherings",
    description:
      "Intimate settings for your private parties and family gatherings. Enjoy personalized service and a cozy atmosphere for your special occasions.",
    features: ["Intimate Setting", "Personalized Service", "Custom Menu", "Flexible Timing"],
  },
]

export default function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="events" className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-orange-200/20 to-red-200/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-200/20 to-orange-200/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
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
            🎉 Celebrations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground">
            Create <span className="gradient-text">Unforgettable Moments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether it's a birthday bash, an intimate dinner, or a team celebration, Craving Hut sets the stage for
            unforgettable memories.
          </p>
        </motion.div>

        {/* Event Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((eventType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {eventType.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-orange-600 transition-colors">
                    {eventType.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{eventType.description}</p>
                  <div className="space-y-2">
                    {eventType.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.2 + index * 0.1 + featureIndex * 0.05, duration: 0.3 }}
                      >
                        <Sparkles className="h-3 w-3 text-orange-600" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold font-playfair text-foreground mb-4">Upcoming Events</h3>
            <p className="text-muted-foreground">Don't miss out on these special culinary experiences</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {event.featured && (
                      <motion.div
                        className="absolute top-4 left-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                      >
                        ⭐ Featured Event
                      </motion.div>
                    )}

                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                      <h4 className="text-xl font-bold">{event.title}</h4>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-orange-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-orange-600">{event.price}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                      <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white group">
                        Book Now
                        <motion.span
                          className="ml-2 inline-block"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
