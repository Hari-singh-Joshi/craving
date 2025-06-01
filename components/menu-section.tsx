"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Star, Plus } from "lucide-react"
import Image from "next/image"

const menuItems = {
  all: [] as any[],
  starters: [
    {
      name: "Momos",
      price: "₹120",
      description: "Steamed dumplings with spicy chutney and fresh herbs",
      image: "/img/restaurant/momo.avif",
      rating: 4.8,
      popular: true,
    },
    {
      name: "Paneer Tikka",
      price: "₹180",
      description: "Grilled cottage cheese with aromatic spices and mint chutney",
      image: "/img/restaurant/paneertikka.jpg",
      rating: 4.9,
    },
    {
      name: "Spring Rolls",
      price: "₹140",
      description: "Crispy rolls with fresh vegetables and sweet & sour sauce",
      image: "/img/restaurant/springroll.jpg",
      rating: 4.6,
    },
    {
      name: "Chicken 65",
      price: "₹220",
      description: "Spicy fried chicken with curry leaves and yogurt dip",
      image: "/img/restaurant/chicken65.jpg",
      rating: 4.7,
    },
  ],
  mains: [
    {
      name: "Paneer Butter Masala",
      price: "₹280",
      description: "Rich creamy curry with cottage cheese and aromatic spices",
      image: "/img/restaurant/paneer.jpg",
      rating: 4.9,
      popular: true,
    },
    {
      name: "Butter Chicken",
      price: "₹320",
      description: "Tender chicken in tomato-based curry with cream and butter",
      image: "/img/restaurant/butterchicken.jpg",
      rating: 4.8,
    },
    {
      name: "Stuffed Parathas",
      price: "₹160",
      description: "Traditional flatbread with various fillings and pickle",
      image: "/img/restaurant/paratha.jpg",
      rating: 4.7,
    },
    {
      name: "Chicken Fried Rice",
      price: "₹240",
      description: "Wok-tossed rice with chicken, vegetables and soy sauce",
      image: "/img/restaurant/friedrice.jpg",
      rating: 4.6,
    },
  ],
  desserts: [
    {
      name: "Kulfi Ice Cream",
      price: "₹80",
      description: "Traditional Indian ice cream with cardamom and pistachios",
      image: "/img/restaurant/icecream.jpg",
      rating: 4.8,
    },
    {
      name: "Oreo Shake",
      price: "₹120",
      description: "Thick shake with crushed Oreo cookies and vanilla ice cream",
      image: "/img/restaurant/oreo.jpg",
      rating: 4.7,
      popular: true,
    },
  ],
  drinks: [
    {
      name: "Punjabi Lassi",
      price: "₹100",
      description: "Traditional yogurt-based drink with cardamom and rose",
      image: "/img/restaurant/lassi.jpg",
      rating: 4.9,
    },
    {
      name: "Fresh Lime Mojito",
      price: "₹150",
      description: "Refreshing mint and lime mocktail with soda",
      image: "/img/restaurant/mojito.jpg",
      rating: 4.6,
    },
  ],
  specials: [
    {
      name: "Afghani Chaap",
      price: "₹350",
      description: "Signature marinated soy chaap with special spices",
      image: "/img/restaurant/afgani.jpg",
      rating: 4.9,
      featured: true,
      popular: true,
    },
    {
      name: "Chole Bhature",
      price: "₹200",
      description: "Spicy chickpeas with fried bread and pickled onions",
      image: "/img/restaurant/bhature.jpg",
      rating: 4.8,
      featured: true,
    },
  ],
}

// Combine all items for "all" tab
menuItems.all = Object.entries(menuItems)
  .filter(([key]) => key !== "all")
  .flatMap(([category, items]) => items.map((item) => ({ ...item, category })))

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const currentItems = menuItems[activeTab as keyof typeof menuItems] || []

  return (
    <section id="menu" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-200 px-4 py-2">
            🍽️ Our Delicacies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground">
            Our <span className="gradient-text">Menu</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have the best taste in Dehradun with a native feel of weather. Our menu features a variety of dishes crafted
            with locally sourced ingredients and traditional cooking methods.
          </p>
        </motion.div>

        {/* Menu Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 md:grid-cols-6 h-auto bg-card border">
              <TabsTrigger value="all" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                All Items
              </TabsTrigger>
              <TabsTrigger
                value="starters"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Starters
              </TabsTrigger>
              <TabsTrigger value="mains" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Mains
              </TabsTrigger>
              <TabsTrigger
                value="desserts"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Desserts
              </TabsTrigger>
              <TabsTrigger value="drinks" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Drinks
              </TabsTrigger>
              <TabsTrigger
                value="specials"
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Chef's Special
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.popular && <Badge className="bg-red-600 text-white border-0 text-xs">🔥 Popular</Badge>}
                    {item.featured && (
                      <Badge className="bg-yellow-600 text-white border-0 text-xs">⭐ Chef's Special</Badge>
                    )}
                  </div>

                  {/* Add button */}
                  <motion.div
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button size="icon" className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </motion.div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-orange-600 transition-colors">
                      {item.name}
                    </h3>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 font-bold">
                      {item.price}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-foreground">{item.rating}</span>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
