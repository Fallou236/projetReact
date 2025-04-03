import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80")',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="text-center text-white p-8 max-w-3xl">
        <h1 className="text-6xl font-bold mb-6">Paradise Nursery</h1>
        <p className="text-xl mb-8 leading-relaxed">
          Welcome to Paradise Nursery, where we bring the beauty of nature into your home. 
          Our carefully curated collection of indoor plants will transform your space into 
          a verdant paradise. With expert care guides and premium quality plants, we're here 
          to help you create your own indoor oasis.
        </p>
        <Link 
          to="/products" 
          className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg 
                     text-xl font-semibold hover:bg-green-700 transition-colors duration-200"
        >
          Get Started
          <ArrowRight className="ml-2" size={24} />
        </Link>
      </div>
    </div>
  );
}