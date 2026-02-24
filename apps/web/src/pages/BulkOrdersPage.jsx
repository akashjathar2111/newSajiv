
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BulkOrderForm from '@/components/BulkOrderForm.jsx';
import { Package, Users, TrendingDown, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const BulkOrdersPage = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Volume Discounts',
      description: 'Save up to 30% on bulk orders of 500+ units'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal account manager for all your needs'
    },
    {
      icon: Package,
      title: 'Custom Packaging',
      description: 'Branded packaging options available'
    },
    {
      icon: Award,
      title: 'Priority Shipping',
      description: 'Fast delivery for large orders'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bulk Orders - Corporate & Event Solutions | Sajiv Eco-Friendly Products</title>
        <meta
          name="description"
          content="Order eco-friendly disposable products in bulk for your corporate events, weddings, or business. Get volume discounts, custom packaging, and dedicated support. Minimum order 100 units."
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
              Bulk Orders for Events & Businesses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for corporate events, weddings, festivals, and businesses looking for sustainable disposable solutions
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-4">
                  <benefit.icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Request a Quote</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24 hours with a custom quote
              </p>
              <BulkOrderForm />
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Pricing Tiers */}
              <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Volume Pricing</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="font-semibold">100-499 units</span>
                    <span className="text-2xl font-bold">10% off</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="font-semibold">500-999 units</span>
                    <span className="text-2xl font-bold">20% off</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">1000+ units</span>
                    <span className="text-2xl font-bold">30% off</span>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect For</h3>
                <ul className="space-y-3">
                  {[
                    'Corporate Events & Conferences',
                    'Weddings & Private Parties',
                    'Music Festivals & Outdoor Events',
                    'Restaurants & Catering Services',
                    'Schools & Universities',
                    'Sports Events & Stadiums'
                  ].map((useCase, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-3xl p-8 border border-stone-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-700 mb-4">
                  Our bulk order specialists are here to assist you with custom quotes and product recommendations.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">📧 bulkorders@sajiv.eco</p>
                  <p className="font-semibold">📞 +1 (555) 123-4567</p>
                  <p className="text-sm text-gray-600">Monday - Friday, 9am - 6pm EST</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Trusted by Leading Organizations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
                <div className="text-gray-600">Corporate Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">10M+</div>
                <div className="text-gray-600">Products Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">24hr</div>
                <div className="text-gray-600">Response Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BulkOrdersPage;
