import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Sprout } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function Header() {
  const location = useLocation();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-green-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <Sprout size={32} />
          <span>Paradise Nursery</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          {location.pathname !== '/' && (
            <Link to="/" className="flex items-center space-x-1 hover:text-green-200">
              <Home size={24} />
              <span>Home</span>
            </Link>
          )}
          
          {location.pathname !== '/products' && (
            <Link to="/products" className="flex items-center space-x-1 hover:text-green-200">
              <Sprout size={24} />
              <span>Products</span>
            </Link>
          )}
          
          {location.pathname !== '/cart' && (
            <Link to="/cart" className="flex items-center space-x-1 hover:text-green-200">
              <div className="relative">
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}