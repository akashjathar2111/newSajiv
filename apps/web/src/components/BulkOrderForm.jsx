
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BulkOrderForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    productType: '',
    quantity: '',
    eventDetails: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const productTypes = [
    'Water Bottles',
    'Plates',
    'Cutlery',
    'Mixed Assortment',
    'Custom Request'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.productType) {
      newErrors.productType = 'Please select a product type';
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Quantity is required';
    } else if (isNaN(formData.quantity) || parseInt(formData.quantity) < 100) {
      newErrors.quantity = 'Minimum bulk order is 100 units';
    }

    if (!formData.eventDetails.trim()) {
      newErrors.eventDetails = 'Event details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields correctly.',
        variant: 'destructive',
        duration: 4000,
      });
      return;
    }

    // Save to localStorage
    const submissions = JSON.parse(localStorage.getItem('sajiv-bulk-orders') || '[]');
    const newSubmission = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    };
    submissions.push(newSubmission);
    localStorage.setItem('sajiv-bulk-orders', JSON.stringify(submissions));

    setSubmitted(true);
    toast({
      title: 'Order Submitted Successfully!',
      description: 'Our team will contact you within 24 hours.',
      duration: 5000,
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        companyName: '',
        productType: '',
        quantity: '',
        eventDetails: '',
        phone: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
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
          className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-lg text-gray-700 mb-2">Your bulk order request has been submitted.</p>
        <p className="text-gray-600">We'll contact you within 24 hours to discuss your needs.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
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

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email Address <span className="text-red-600">*</span>
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
          placeholder="john@company.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="companyName" className="block text-sm font-semibold text-gray-900 mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900"
          placeholder="Your Company Inc."
        />
      </div>

      {/* Phone */}
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

      {/* Product Type */}
      <div>
        <label htmlFor="productType" className="block text-sm font-semibold text-gray-900 mb-2">
          Product Type <span className="text-red-600">*</span>
        </label>
        <select
          id="productType"
          name="productType"
          value={formData.productType}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 ${
            errors.productType ? 'border-red-500' : 'border-gray-200'
          }`}
        >
          <option value="">Select a product type</option>
          {productTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.productType && <p className="mt-1 text-sm text-red-600">{errors.productType}</p>}
      </div>

      {/* Quantity */}
      <div>
        <label htmlFor="quantity" className="block text-sm font-semibold text-gray-900 mb-2">
          Quantity (Minimum 100 units) <span className="text-red-600">*</span>
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="100"
          className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 ${
            errors.quantity ? 'border-red-500' : 'border-gray-200'
          }`}
          placeholder="500"
        />
        {errors.quantity && <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>}
      </div>

      {/* Event Details */}
      <div>
        <label htmlFor="eventDetails" className="block text-sm font-semibold text-gray-900 mb-2">
          Event Details <span className="text-red-600">*</span>
        </label>
        <textarea
          id="eventDetails"
          name="eventDetails"
          value={formData.eventDetails}
          onChange={handleChange}
          rows="4"
          className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none text-gray-900 ${
            errors.eventDetails ? 'border-red-500' : 'border-gray-200'
          }`}
          placeholder="Tell us about your event, timeline, and any special requirements..."
        />
        {errors.eventDetails && <p className="mt-1 text-sm text-red-600">{errors.eventDetails}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all group"
      >
        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
        Submit Bulk Order Request
      </Button>

      <p className="text-sm text-gray-600 text-center">
        * Required fields. We'll respond within 24 hours.
      </p>
    </form>
  );
};

export default BulkOrderForm;
