import React, { useState } from 'react';
import { Plus, Star } from 'lucide-react';
import { Pizza } from '../types';

interface PizzaCardProps {
  pizza: Pizza;
  onAddToCart: (pizza: Pizza, size: 'small' | 'medium' | 'large') => void;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({ pizza, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');

  const sizeMultipliers = {
    small: 0.8,
    medium: 1,
    large: 1.3
  };

  const getSizePrice = (size: 'small' | 'medium' | 'large') => {
    return (pizza.price * sizeMultipliers[size]).toFixed(2);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            pizza.category === 'specialty' ? 'bg-red-100 text-red-800' :
            pizza.category === 'vegetarian' ? 'bg-green-100 text-green-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {pizza.category.charAt(0).toUpperCase() + pizza.category.slice(1)}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-yellow-400 rounded-full p-2">
          <Star className="w-4 h-4 text-yellow-800 fill-current" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pizza.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pizza.description}</p>
        
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Ingredients:</p>
          <div className="flex flex-wrap gap-2">
            {pizza.ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Size:</p>
          <div className="flex space-x-2">
            {(['small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedSize === size
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-red-600">
              ${getSizePrice(selectedSize)}
            </span>
            {selectedSize !== 'medium' && (
              <span className="text-sm text-gray-500 ml-2">
                (Base: ${pizza.price.toFixed(2)})
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(pizza, selectedSize)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 group"
          >
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};