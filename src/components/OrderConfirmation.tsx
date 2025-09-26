import React from 'react';
import { CheckCircle, Clock, MapPin } from 'lucide-react';

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  isOpen,
  onClose,
  orderNumber
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600">Thank you for choosing Bella Pizza</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-600 mb-2">Order Number</p>
            <p className="text-2xl font-bold text-red-600 font-mono">#{orderNumber}</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>Estimated delivery: 25-35 minutes</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>We'll send you updates via SMS</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};