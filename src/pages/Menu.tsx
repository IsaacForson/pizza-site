import React, { useState } from 'react';
import { PizzaCard } from '../components/PizzaCard';
import { pizzas } from '../data/pizzas';
import { Pizza } from '../types';
import { Filter } from 'lucide-react';

interface MenuProps {
  onAddToCart: (pizza: Pizza, size: 'small' | 'medium' | 'large') => void;
}

export const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');

  const filteredPizzas = selectedCategory === 'all' 
    ? pizzas 
    : pizzas.filter(pizza => pizza.category === selectedCategory);

  const sortedPizzas = [...filteredPizzas].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-red-100">
            Handcrafted pizzas made with the finest ingredients
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">Filter by category:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['all', 'classic', 'specialty', 'vegetarian'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  {category === 'all' && ' Pizzas'}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-900">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price')}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>

        {/* Menu Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{pizzas.length}</div>
            <div className="text-gray-600">Total Pizzas</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">
              ${Math.min(...pizzas.map(p => p.price)).toFixed(2)}
            </div>
            <div className="text-gray-600">Starting From</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">30min</div>
            <div className="text-gray-600">Delivery Time</div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedPizzas.length} pizza{sortedPizzas.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${selectedCategory} category`}
          </p>
        </div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Empty State */}
        {sortedPizzas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No pizzas found in this category.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              View All Pizzas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};