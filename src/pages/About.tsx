import React from 'react';
import { Award, Clock, Heart, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl text-red-100">
            Four decades of authentic Italian tradition
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              From Naples to Your Neighborhood
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 1985 by Giuseppe and Maria Rossi, Bella Pizza began as a small 
              family restaurant with a simple mission: to bring the authentic taste of 
              Naples to our community. What started with a wood-fired oven and traditional 
              family recipes has grown into the neighborhood's favorite pizza destination.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Every pizza we make honors our Italian heritage. We import our San Marzano 
              tomatoes directly from Italy, use only the finest buffalo mozzarella, and 
              hand-stretch our dough using techniques passed down through generations.
            </p>
            <p className="text-lg text-gray-600">
              Today, our second generation continues the tradition, combining time-honored 
              recipes with modern convenience to deliver that authentic Italian experience 
              right to your door.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Traditional pizza making"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">40+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Family Recipe</h3>
            <p className="text-gray-600">
              Traditional recipes passed down through four generations of Italian chefs.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              Only the finest imported ingredients and locally sourced fresh produce.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Hot, fresh pizza delivered to your door in 30 minutes or less.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">
              Proudly serving our neighborhood and supporting local initiatives.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Giuseppe Rossi"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Giuseppe Rossi</h3>
              <p className="text-red-600 font-medium mb-2">Founder & Head Chef</p>
              <p className="text-gray-600 text-sm">
                Master pizza maker with 40+ years of experience, trained in the traditional Neapolitan style.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Maria Rossi"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maria Rossi</h3>
              <p className="text-red-600 font-medium mb-2">Co-Founder & Manager</p>
              <p className="text-gray-600 text-sm">
                The heart of our operations, ensuring every customer receives the warmest Italian hospitality.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Marco Rossi"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marco Rossi</h3>
              <p className="text-red-600 font-medium mb-2">Executive Chef</p>
              <p className="text-gray-600 text-sm">
                Second-generation chef bringing innovation while honoring traditional methods and recipes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};