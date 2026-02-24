
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useCart } from '@/context/CartContext.jsx';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingBag, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CheckoutForm = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
        duration: 4000,
      });
      return;
    }

    setProcessing(true);

    try {
      // Simulate order processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSucceeded(true);
      clearCart();
      
      toast({
        title: 'Order Successful!',
        description: 'Your order has been placed. Check your email for confirmation.',
        duration: 5000,
      });

      // Save order to localStorage
      const order = {
        id: Date.now(),
        items: items,
        total: getCartTotal(),
        customerInfo: formData,
        orderDate: new Date().toISOString()
      };
      const orders = JSON.parse(localStorage.getItem('sajiv-orders') || '[]');
      orders.push(order);
      localStorage.setItem('sajiv-orders', JSON.stringify(orders));

    } catch (error) {
      toast({
        title: 'Order Failed',
        description: 'An error occurred while processing your order.',
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setProcessing(false);
    }
  };

  if (succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-green-600 rounded-full mb-6"
        >
          <CheckCircle className="w-16 h-16 text-white" />
        </motion.div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h2>
        <p className="text-lg text-gray-700 mb-2">Thank you for your purchase, {formData.name}!</p>
        <p className="text-gray-600 mb-6">
          A confirmation email has been sent to {formData.email}
        </p>
        <p className="text-sm text-gray-600">
          Your eco-friendly products will be shipped within 2-3 business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Customer Information */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="John Doe"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">
              Address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 ${
                errors.address ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="123 Main Street"
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-gray-900 mb-2">
              City <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 ${
                errors.city ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="New York"
            />
            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-semibold text-gray-900 mb-2">
              State <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 ${
                errors.state ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="NY"
            />
            {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-900 mb-2">
              ZIP Code <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 ${
                errors.zipCode ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="10001"
            />
            {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={processing}
        className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {processing ? 'Processing...' : `Complete Order • $${(getCartTotal() + (getCartTotal() >= 50 ? 0 : 5.99) + (getCartTotal() * 0.08)).toFixed(2)}`}
      </Button>
    </form>
  );
};

const CheckoutPage = () => {
  const { items, getCartTotal } = useCart();

  return (
    <>
      <Helmet>
        <title>Checkout - Complete Your Order | Sajiv Eco-Friendly Products</title>
        <meta
          name="description"
          content="Complete your purchase of sustainable eco-friendly products. Secure checkout. Free shipping on orders over $50."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Checkout</h1>
            <p className="text-xl text-gray-600">Complete your order securely</p>
          </motion.div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-12 text-center shadow-lg"
            >
              <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add some products to get started!</p>
              <a
                href="/shop"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Browse Products</span>
              </a>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                <CheckoutForm />
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          <p className="text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold text-gray-900">${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold text-green-700">
                        {getCartTotal() >= 50 ? 'FREE' : '$5.99'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-semibold text-gray-900">
                        ${(getCartTotal() * 0.08).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-green-800">
                        ${(getCartTotal() + (getCartTotal() >= 50 ? 0 : 5.99) + (getCartTotal() * 0.08)).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {getCartTotal() >= 50 && (
                    <div className="mt-4 bg-green-50 rounded-lg p-3 text-center">
                      <p className="text-sm font-semibold text-green-800">
                        🎉 You qualify for FREE shipping!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CheckoutPage;
