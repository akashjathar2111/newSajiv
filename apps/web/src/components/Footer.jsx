
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/#about' },
      { name: 'Our Story', path: '/#story' },
      { name: 'Sustainability', path: '/how-it-works' },
      { name: 'Certifications', path: '/#certifications' }
    ],
    shop: [
      { name: 'All Products', path: '/shop' },
      { name: 'Water Bottles', path: '/shop?category=bottles' },
      { name: 'Plates', path: '/shop?category=plates' },
      { name: 'Cutlery', path: '/shop?category=cutlery' }
    ],
    support: [
      { name: 'Contact Us', path: '/#contact' },
      { name: 'Bulk Orders', path: '/bulk-orders' },
      { name: 'FAQ', path: '/#faq' },
      { name: 'Shipping Info', path: '/#shipping' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-50 to-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="bg-gradient-to-br from-green-700 to-green-900 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
                Sajiv
              </span>
            </Link>
            <p className="text-green-800 mb-4 leading-relaxed">
              Leading the way in sustainable, eco-friendly disposable products. Our mission is to provide convenient solutions that naturally decompose in just 7 days, protecting our planet for future generations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-green-700">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@sajiv.eco</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Green Street, Eco City, EC 12345</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-green-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-green-700 hover:text-green-900 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold text-green-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-green-700 hover:text-green-900 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-green-900 mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-green-700 hover:text-green-900 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Eco Message */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 mb-8 border border-green-200">
          <div className="flex items-center justify-center space-x-2 text-green-800">
            <Leaf className="w-5 h-5" />
            <p className="font-semibold text-center">
              Every purchase helps reduce plastic waste and supports a sustainable future
            </p>
            <Leaf className="w-5 h-5" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-green-700">
              © {currentYear} Sajiv. All rights reserved. Made with 💚 for the planet.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-green-100 hover:bg-green-200 rounded-full transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-green-700 group-hover:text-green-900 transition-colors" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-green-700">
              <Link to="/privacy" className="hover:text-green-900 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-green-900 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
