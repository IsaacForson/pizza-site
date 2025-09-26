import React, { useState } from 'react';
import { PizzaCard } from '../components/PizzaCard';
import { pizzas } from '../data/pizzas';
import { Pizza } from '../types';

interface HomeProps {
  onAddToCart: (pizza: Pizza, size: 'small' | 'medium' | 'large') => void;
}

export const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPizzas = selectedCategory === 'all' 
    ? pizzas 
    : pizzas.filter(pizza => pizza.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Authentic Italian Pizza
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Fresh ingredients, traditional recipes, delivered hot to your door
          </p>
          <p className="text-lg text-red-200">
            🍕 30-minute delivery guarantee | 🚚 Free delivery on orders $25+
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {['all', 'classic', 'specialty', 'vegetarian'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-sm'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              {category === 'all' && ' Pizzas'}
            </button>
          ))}
        </div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};