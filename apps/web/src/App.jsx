
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import BulkOrdersPage from './pages/BulkOrdersPage';
import CheckoutPage from './pages/CheckoutPage';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/how-it-works" element={<HomePage />} />
          <Route path="/bulk-orders" element={<BulkOrdersPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Toaster />
      </CartProvider>
    </Router>
  );
}

export default App;
