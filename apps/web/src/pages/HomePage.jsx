
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero.jsx';
import HowItWorks from '@/components/HowItWorks.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Truck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const features = [
    {
      icon: Package,
      title: 'Premium Quality',
      description: 'Durable and reliable products that perform as well as traditional disposables'
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Free shipping on orders over $50, delivered right to your door'
    },
    {
      icon: Shield,
      title: '100% Satisfaction',
      description: 'Money-back guarantee if you\'re not completely satisfied'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sajiv - Sustainable Eco-Friendly Disposable Products | 7-Day Biodegradable</title>
        <meta
          name="description"
          content="Shop Sajiv's eco-friendly disposable water bottles, plates, and cutlery. 100% biodegradable products that decompose naturally in just 7 days. Sustainable solutions for a greener planet."
        />
      </Helmet>

      <Header />
      
      <main>
        <Hero />

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-4">
                    <feature.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Join thousands of eco-conscious customers choosing sustainable alternatives
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all group"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/bulk-orders"
                  className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-green-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-green-700 shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Bulk Orders</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help you find the perfect eco-friendly solutions
            </p>
            <a
              href="mailto:contact@sajiv.eco"
              className="inline-flex items-center space-x-2 text-green-700 hover:text-green-800 font-semibold text-lg"
            >
              <span>contact@sajiv.eco</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
