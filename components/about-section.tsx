"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Users, Utensils, Award, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Customers", color: "text-blue-600" },
    { icon: Utensils, value: "50+", label: "Signature Dishes", color: "text-green-600" },
    { icon: Award, value: "4.9", label: "Average Rating", color: "text-yellow-600" },
    { icon: Heart, value: "100%", label: "Love & Care", color: "text-red-600" },
  ]

  return (
    <section
  id="about"
  ref={ref}
  className="py-24 bg-background overflow-x-hidden"
>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/img/restaurant/four.png"
                alt="Restaurant interior"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-card rounded-2xl shadow-xl p-6 max-w-xs border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-orange-100 rounded-full p-2">
                  <Sparkles className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">Est. 2025</p>
                  <p className="text-sm text-muted-foreground">2+ Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-200 px-4 py-2">
                  🍽️ Our Story
                </Badge>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold font-playfair text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Best Taste In <span className="gradient-text">Dehradun</span>
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Craving Hut in Dehradun is a cozy and vibrant spot that captures the true essence of the city's evolving
                food scene. Our chefs blend traditional recipes with modern techniques to create unforgettable dining
                experiences that celebrate the rich culinary heritage of Uttarakhand.
              </motion.p>
            </div>

            {/* Chef Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-zinc-900 dark:to-zinc-800 border border-orange-200 dark:border-zinc-700 overflow-hidden">
  <CardContent className="p-6 relative">
    <motion.div
      className="absolute -right-4 -top-4 text-orange-200 dark:text-orange-900 opacity-30"
      initial={{ scale: 0, rotate: -10 }}
      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
      </svg>
    </motion.div>
    
    <blockquote className="text-lg italic text-foreground dark:text-gray-200 relative z-10 mb-4">
      "Cooking is a language through which all the following properties may be expressed: harmony,
      creativity, happiness, beauty, poetry, complexity, magic, humor, provocation and culture."
    </blockquote>
    
    <div className="flex items-center gap-3">
      <div className="bg-orange-200 dark:bg-orange-800 rounded-full p-2">
        <ChefHat className="h-5 w-5 text-orange-600 dark:text-orange-200" />
      </div>
      <div>
        <p className="font-semibold text-foreground dark:text-white">Chef Rahul Sharma</p>
        <p className="text-sm text-muted-foreground dark:text-gray-400">Head Chef & Culinary Director</p>
      </div>
    </div>
  </CardContent>
</Card>

            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-card border rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r from-orange-100 to-red-100`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
