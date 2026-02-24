
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { motion } from 'framer-motion';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Eco Water Bottle - 500ml',
      category: 'bottles',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1642764732251-9dacf60eb423',
      description: 'Biodegradable water bottle made from plant-based materials. Perfect for events, picnics, and daily use.',
      features: ['500ml capacity', 'Leak-proof design', 'Decomposes in 7 days', 'BPA-free'],
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Eco Water Bottle - 750ml',
      category: 'bottles',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1642764732251-9dacf60eb423',
      description: 'Larger capacity eco-friendly water bottle for active lifestyles and outdoor adventures.',
      features: ['750ml capacity', 'Ergonomic grip', 'Fully compostable', 'Temperature resistant'],
      badge: null
    },
    {
      id: 3,
      name: 'Eco Plates - 9 inch (Pack of 25)',
      category: 'plates',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1633878353697-f751870d1d76',
      description: 'Sturdy biodegradable plates perfect for parties, events, and everyday meals.',
      features: ['9 inch diameter', 'Microwave safe', 'Oil & water resistant', 'Pack of 25'],
      badge: null
    },
    {
      id: 4,
      name: 'Eco Plates - 7 inch (Pack of 50)',
      category: 'plates',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1633878353697-f751870d1d76',
      description: 'Smaller eco-friendly plates ideal for appetizers, desserts, and side dishes.',
      features: ['7 inch diameter', 'Bulk pack of 50', 'Compostable', 'Durable construction'],
      badge: 'Value Pack'
    },
    {
      id: 5,
      name: 'Eco Cutlery Set (Pack of 100)',
      category: 'cutlery',
      price: 22.99,
      image: 'https://images.unsplash.com/photo-1633878353720-7a49a4a3d0ec',
      description: 'Complete cutlery set including forks, knives, and spoons made from sustainable materials.',
      features: ['100 pieces total', 'Forks, knives & spoons', 'Heat resistant', 'Smooth finish'],
      badge: 'Complete Set'
    },
    {
      id: 6,
      name: 'Eco Spoons Only (Pack of 50)',
      category: 'cutlery',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1633878353720-7a49a4a3d0ec',
      description: 'Biodegradable spoons perfect for soups, desserts, and beverages.',
      features: ['50 spoons', 'Sturdy design', 'Eco-friendly', 'Disposable'],
      badge: null
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'bottles', name: 'Water Bottles' },
    { id: 'plates', name: 'Plates' },
    { id: 'cutlery', name: 'Cutlery' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Shop Eco-Friendly Products | Sajiv - Biodegradable Water Bottles, Plates & Cutlery</title>
        <meta
          name="description"
          content="Browse Sajiv's collection of sustainable disposable products. Shop biodegradable water bottles, plates, and cutlery that decompose naturally in 7 days. Free shipping on orders over $50."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Shop Eco-Friendly Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of sustainable disposable products that naturally decompose in just 7 days
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-700 border-2 border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-600">No products found in this category.</p>
            </motion.div>
          )}

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-200"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Free Shipping on Orders Over $50
              </h3>
              <p className="text-gray-700 mb-4">
                All products are 100% biodegradable and certified eco-friendly
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span>7-Day Decomposition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span>USDA Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span>Carbon Neutral</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ShopPage;
