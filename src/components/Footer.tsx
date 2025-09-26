import React from 'react';
import { Pizza, Clock, Phone, MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-600 p-2 rounded-full">
                <Pizza className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bella Pizza</h3>
                <p className="text-sm text-gray-400">Authentic Italian Since 1985</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Serving the finest authentic Italian pizzas made with fresh ingredients 
              and traditional recipes passed down through generations.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-500" />
                <span>(555) 123-PIZZA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-500" />
                <span>info@bellapizza.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>123 Pizza Street, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-red-500" />
                <div>
                  <p>Mon-Thu: 11AM - 10PM</p>
                  <p>Fri-Sat: 11AM - 11PM</p>
                  <p>Sunday: 12PM - 9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bella Pizza. All rights reserved. | 30-minute delivery guarantee
          </p>
        </div>
      </div>
    </footer>
  );
};