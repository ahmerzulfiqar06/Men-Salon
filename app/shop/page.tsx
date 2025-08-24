'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Filter, Grid, List, ShoppingCart, Heart, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const categories = [
  { id: 'all', name: 'All Products', count: 24 },
  { id: 'hair-care', name: 'Hair Care', count: 8 },
  { id: 'beard-care', name: 'Beard Care', count: 6 },
  { id: 'skincare', name: 'Skincare', count: 5 },
  { id: 'styling-tools', name: 'Styling Tools', count: 3 },
  { id: 'accessories', name: 'Accessories', count: 2 },
]

const products = [
  // Hair Care Products
  {
    id: 1,
    name: 'Premium Matte Hair Pomade',
    brand: 'CLIPPERZ Pro',
    category: 'hair-care',
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
    description: 'Strong hold, matte finish pomade perfect for modern hairstyles. Long-lasting formula.',
    featured: true,
    bestseller: true,
  },
  {
    id: 2,
    name: 'Volumizing Hair Shampoo',
    brand: 'BarberCraft',
    category: 'hair-care',
    price: 18.50,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1556228852-6d35a8b4329b?w=400&h=400&fit=crop&crop=center',
    description: 'Professional-grade shampoo that adds volume and thickness to fine hair.',
  },
  {
    id: 3,
    name: 'Strengthening Hair Conditioner',
    brand: 'BarberCraft',
    category: 'hair-care',
    price: 19.50,
    rating: 4.5,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop&crop=center',
    description: 'Nourishing conditioner with keratin and biotin for stronger, healthier hair.',
  },
  {
    id: 4,
    name: 'Texture Spray for Men',
    brand: 'CLIPPERZ Pro',
    category: 'hair-care',
    price: 22.00,
    rating: 4.7,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=400&fit=crop&crop=center',
    description: 'Lightweight spray that adds texture and grip without weighing hair down.',
  },
  {
    id: 5,
    name: 'Hair Wax - Strong Hold',
    brand: 'Gentleman&apos;s Choice',
    category: 'hair-care',
    price: 16.99,
    rating: 4.4,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1503618747-6676b2c11f74?w=400&h=400&fit=crop&crop=center',
    description: 'Flexible wax for natural-looking styles with strong, long-lasting hold.',
  },
  {
    id: 6,
    name: 'Daily Hair Tonic',
    brand: 'Classic Barber',
    category: 'hair-care',
    price: 21.00,
    rating: 4.3,
    reviews: 58,
    image: 'https://images.unsplash.com/photo-1567461622289-4c8cc37d5c8c?w=400&h=400&fit=crop&crop=center',
    description: 'Refreshing tonic that promotes healthy hair growth and adds natural shine.',
  },
  {
    id: 7,
    name: 'Dry Shampoo for Men',
    brand: 'CLIPPERZ Pro',
    category: 'hair-care',
    price: 14.99,
    rating: 4.2,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1522706604291-210a56c3b376?w=400&h=400&fit=crop&crop=center',
    description: 'Quick refresh between washes. Absorbs oil and adds volume instantly.',
  },
  {
    id: 8,
    name: 'Heat Protection Hair Spray',
    brand: 'BarberCraft',
    category: 'hair-care',
    price: 19.99,
    rating: 4.6,
    reviews: 43,
    image: 'https://images.unsplash.com/photo-1585652757141-099fc810ebd3?w=400&h=400&fit=crop&crop=center',
    description: 'Protects hair from heat damage while providing light hold and shine.',
  },

  // Beard Care Products
  {
    id: 9,
    name: 'Signature Beard Oil',
    brand: 'CLIPPERZ Pro',
    category: 'beard-care',
    price: 28.00,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&h=400&fit=crop&crop=center',
    description: 'Premium blend of argan and jojoba oils. Softens beard and moisturizes skin.',
    featured: true,
  },
  {
    id: 10,
    name: 'Beard Balm - Sandalwood',
    brand: 'Gentleman&apos;s Choice',
    category: 'beard-care',
    price: 25.50,
    rating: 4.7,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop&crop=center',
    description: 'Natural balm with sandalwood scent. Shapes and conditions your beard.',
  },
  {
    id: 11,
    name: 'Beard Wash & Shampoo',
    brand: 'Classic Barber',
    category: 'beard-care',
    price: 17.99,
    rating: 4.5,
    reviews: 84,
    image: 'https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=400&h=400&fit=crop&crop=center',
    description: 'Gentle cleanser specifically formulated for facial hair and sensitive skin.',
  },
  {
    id: 12,
    name: 'Mustache Wax',
    brand: 'CLIPPERZ Pro',
    category: 'beard-care',
    price: 12.99,
    rating: 4.4,
    reviews: 71,
    image: 'https://images.unsplash.com/photo-1599351046484-a6b82448bb4e?w=400&h=400&fit=crop&crop=center',
    description: 'Strong hold wax for mustache styling. All-day hold with natural finish.',
  },
  {
    id: 13,
    name: 'Beard Growth Serum',
    brand: 'BarberCraft',
    category: 'beard-care',
    price: 34.99,
    rating: 4.6,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop&crop=center',
    description: 'Advanced formula with biotin and vitamins to promote healthy beard growth.',
  },
  {
    id: 14,
    name: 'Beard Comb - Wooden',
    brand: 'Gentleman&apos;s Choice',
    category: 'beard-care',
    price: 15.00,
    rating: 4.8,
    reviews: 123,
    image: 'https://images.unsplash.com/photo-1595436007847-3e1ce6db5d58?w=400&h=400&fit=crop&crop=center',
    description: 'Handcrafted wooden comb with fine and wide teeth for all beard lengths.',
  },

  // Skincare Products
  {
    id: 15,
    name: 'Daily Face Moisturizer',
    brand: 'CLIPPERZ Pro',
    category: 'skincare',
    price: 26.00,
    rating: 4.5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
    description: 'Lightweight, non-greasy moisturizer with SPF 15 for daily protection.',
  },
  {
    id: 16,
    name: 'Deep Cleansing Face Wash',
    brand: 'BarberCraft',
    category: 'skincare',
    price: 19.99,
    rating: 4.4,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=400&fit=crop&crop=center',
    description: 'Deep cleansing gel that removes dirt and oil without over-drying.',
  },
  {
    id: 17,
    name: 'Anti-Aging Eye Cream',
    brand: 'Gentleman&apos;s Choice',
    category: 'skincare',
    price: 32.50,
    rating: 4.3,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1556909114-16c8b3b5d15f?w=400&h=400&fit=crop&crop=center',
    description: 'Reduces fine lines and dark circles. Caffeine-infused formula.',
  },
  {
    id: 18,
    name: 'Exfoliating Face Scrub',
    brand: 'Classic Barber',
    category: 'skincare',
    price: 22.00,
    rating: 4.6,
    reviews: 63,
    image: 'https://images.unsplash.com/photo-1556909078-bd29c85b11e2?w=400&h=400&fit=crop&crop=center',
    description: 'Gentle exfoliation with natural ingredients. Use 2-3 times per week.',
  },
  {
    id: 19,
    name: 'Aftershave Balm',
    brand: 'CLIPPERZ Pro',
    category: 'skincare',
    price: 23.99,
    rating: 4.7,
    reviews: 91,
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop&crop=center',
    description: 'Soothing balm that calms irritation and moisturizes freshly shaved skin.',
  },

  // Styling Tools
  {
    id: 20,
    name: 'Professional Hair Dryer',
    brand: 'BarberCraft',
    category: 'styling-tools',
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.8,
    reviews: 34,
    image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=400&h=400&fit=crop&crop=center',
    description: 'Powerful 1800W dryer with ionic technology for faster drying and less frizz.',
    featured: true,
  },
  {
    id: 21,
    name: 'Beard Trimmer Kit',
    brand: 'CLIPPERZ Pro',
    category: 'styling-tools',
    price: 79.99,
    rating: 4.7,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1623289716811-4d4e6bb1c0f5?w=400&h=400&fit=crop&crop=center',
    description: 'Complete trimmer kit with multiple guards and precision attachments.',
  },
  {
    id: 22,
    name: 'Round Styling Brush',
    brand: 'Gentleman&apos;s Choice',
    category: 'styling-tools',
    price: 24.99,
    rating: 4.5,
    reviews: 41,
    image: 'https://images.unsplash.com/photo-1633681734188-ad2cf03e5935?w=400&h=400&fit=crop&crop=center',
    description: 'Natural boar bristle brush perfect for blow-drying and styling.',
  },

  // Accessories
  {
    id: 23,
    name: 'Luxury Shaving Kit',
    brand: 'Classic Barber',
    category: 'accessories',
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.9,
    reviews: 28,
    image: 'https://images.unsplash.com/photo-1658189929896-e4e75e0e09a3?w=400&h=400&fit=crop&crop=center',
    description: 'Complete shaving set with safety razor, brush, stand, and premium soap.',
    featured: true,
  },
  {
    id: 24,
    name: 'Leather Toiletry Bag',
    brand: 'Gentleman&apos;s Choice',
    category: 'accessories',
    price: 45.00,
    rating: 4.6,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
    description: 'Genuine leather toiletry bag with multiple compartments and water-resistant lining.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'name':
        return a.name.localeCompare(b.name)
      default: // featured
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating
    }
  })

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Grooming Products
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover premium grooming essentials used by our professional barbers. 
            From styling products to skincare, find everything you need for the perfect look.
          </motion.p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search */}
            <motion.div variants={itemVariants} className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </motion.div>

            {/* Sort and View */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Categories */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {sortedProducts.length} of {products.length} products
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}
        >
          {sortedProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className={`h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden ${
                viewMode === 'list' ? 'flex flex-row' : ''
              }`}>
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {product.featured && (
                    <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                  {product.bestseller && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Bestseller
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Sale
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>

                {/* Product Image */}
                <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-64 w-full'}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow">
                  <CardHeader>
                    <div className="text-sm text-amber-600 font-medium">{product.brand}</div>
                    <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-amber-400 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-2xl p-12 text-white text-center">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
              Need Product Recommendations?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our professional barbers can help you choose the perfect products for your hair type and style goals. 
              Get expert advice and premium results.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(245, 158, 11, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button size="lg" className="text-lg px-8 py-4 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold" asChild>
                  <Link href="/book">Book Consultation</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900 bg-transparent font-semibold" 
                  asChild
                >
                  <Link href="/contact">Ask Our Experts</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
