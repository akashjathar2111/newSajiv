
import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext.jsx';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: 'Added to cart!',
      description: `${quantity} × ${product.name} added to your cart.`,
      duration: 3000,
    });
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-bold">
            {product.badge}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4 space-y-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-green-800">${product.price}</span>
          <span className="text-gray-500 ml-2">/ pack</span>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">Quantity:</span>
          <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-1">
            <button
              onClick={decrementQuantity}
              className="p-1 hover:bg-white rounded transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4 text-gray-700" />
            </button>
            <span className="w-8 text-center font-semibold text-gray-900">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="p-1 hover:bg-white rounded transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all group"
        >
          <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
