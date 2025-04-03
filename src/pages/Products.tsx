import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plant } from '../types';
import { plants } from '../data/plants';
import { addToCart } from '../store/cartSlice';
import { RootState } from '../store';
import { ShoppingCart } from 'lucide-react';

export default function Products() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const categories = Array.from(new Set(plants.map(plant => plant.category)));

  const isInCart = (plantId: string) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Plants</h1>
      
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants
              .filter(plant => plant.category === category)
              .map((plant: Plant) => (
                <div 
                  key={plant.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img 
                    src={plant.image} 
                    alt={plant.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                    <p className="text-gray-600 text-lg mb-4">${plant.price.toFixed(2)}</p>
                    <button
                      onClick={() => dispatch(addToCart(plant))}
                      disabled={isInCart(plant.id)}
                      className={`w-full py-2 px-4 rounded-lg flex items-center justify-center space-x-2
                        ${isInCart(plant.id)
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                    >
                      <ShoppingCart size={20} />
                      <span>{isInCart(plant.id) ? 'In Cart' : 'Add to Cart'}</span>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}