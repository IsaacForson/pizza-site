import React from 'react';
import { MapPin, Phone, Clock, Car } from 'lucide-react';

export const Locations: React.FC = () => {
  const locations = [
    {
      id: 1,
      name: 'Little Italy - Main Location',
      address: '123 Pizza Street, Little Italy, NY 10001',
      phone: '(555) 123-PIZZA',
      hours: {
        weekdays: '11:00 AM - 10:00 PM',
        weekends: '11:00 AM - 11:00 PM',
        sunday: '12:00 PM - 9:00 PM'
      },
      features: ['Dine-in', 'Takeout', 'Delivery', 'Catering'],
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      name: 'Downtown Express',
      address: '456 Business Ave, Downtown, NY 10002',
      phone: '(555) 456-PIZZA',
      hours: {
        weekdays: '10:00 AM - 11:00 PM',
        weekends: '10:00 AM - 12:00 AM',
        sunday: '11:00 AM - 10:00 PM'
      },
      features: ['Takeout', 'Delivery', 'Quick Service'],
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: 'Uptown Family',
      address: '789 Family Blvd, Uptown, NY 10003',
      phone: '(555) 789-PIZZA',
      hours: {
        weekdays: '11:30 AM - 9:30 PM',
        weekends: '11:30 AM - 10:30 PM',
        sunday: '12:00 PM - 9:00 PM'
      },
      features: ['Dine-in', 'Takeout', 'Delivery', 'Kids Menu', 'Party Room'],
      image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-xl text-red-100">
            Find a Bella Pizza near you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Delivery Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <Car className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Delivery Coverage</h2>
            <p className="text-gray-600">
              We deliver to most areas within 5 miles of each location
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">30min</div>
              <div className="text-gray-700">Delivery Guarantee</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">$25+</div>
              <div className="text-gray-700">Free Delivery</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">$3.99</div>
              <div className="text-gray-700">Delivery Fee</div>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="space-y-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {location.name}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Address</p>
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Phone</p>
                        <p className="text-gray-600">{location.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Hours</p>
                        <div className="text-gray-600 text-sm space-y-1">
                          <p>Mon-Thu: {location.hours.weekdays}</p>
                          <p>Fri-Sat: {location.hours.weekends}</p>
                          <p>Sunday: {location.hours.sunday}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-700 font-medium mb-2">Available Services</p>
                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Order Now
                    </button>
                    <button className="flex-1 border border-red-600 text-red-600 hover:bg-red-50 py-2 px-4 rounded-lg font-medium transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Franchise Info */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Franchising?</h2>
          <p className="text-xl text-red-100 mb-6">
            Join the Bella Pizza family and bring authentic Italian flavors to your community
          </p>
          <button className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition-colors">
            Learn More About Franchising
          </button>
        </div>
      </div>
    </div>
  );
};