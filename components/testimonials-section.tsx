"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Prajjwal Saini",
    role: "CEO & Founder",
    company: "TechStart Inc.",
    review:
      "Amazing food quality and excellent service. The authentic Dehradun flavors are unmatched! Every dish tells a story of tradition and innovation.",
    rating: 5,
    image: "/img/person/one.jpg",
  },
  {
    name: "Anjali Thakur",
    role: "UI/UX Designer",
    company: "Creative Studio",
    review:
      "Beautiful ambiance and delicious food. Perfect place for family gatherings. The attention to detail in both food and service is remarkable.",
    rating: 5,
    image: "/img/person/two.jpg",
  },
  {
    name: "Anmol",
    role: "Business Partner",
    company: "Local Ventures",
    review:
      "Great experience every time. The staff is friendly and the food is consistently good. Craving Hut has become our go-to place for celebrations.",
    rating: 5,
    image: "/img/person/three.heic",
  },
  {
    name: "Abhishek",
    role: "Marketing Partner",
    company: "Digital Agency",
    review:
      "Best restaurant in Dehradun! Love the variety and taste of their dishes. The chef's specials are absolutely divine and worth every penny.",
    rating: 5,
    image: "/img/person/four.heic",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-orange-200/20 to-red-200/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
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
            💬 What People Say
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground">
            Customer <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their dining experience at
            Craving Hut.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card relative overflow-hidden">
                {/* Gradient border effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-red-600"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                />

                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote icon */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <Quote className="h-8 w-8 text-orange-600/20" />
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    className="flex mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                      >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Review text */}
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">"{testimonial.review}"</p>

                  {/* Customer info */}
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-orange-200">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <motion.div
                        className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-4 h-4 border-2 border-white"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-orange-600">{testimonial.company}</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div>
              <span className="font-semibold">2000+ Reviews</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div>
              <span className="font-semibold">5000+ Happy Customers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
