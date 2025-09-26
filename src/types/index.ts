export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'classic' | 'specialty' | 'vegetarian';
  ingredients: string[];
}

export interface CartItem {
  pizza: Pizza;
  quantity: number;
  size: 'small' | 'medium' | 'large';
  totalPrice: number;
}

export interface OrderDetails {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  paymentMethod: 'card' | 'cash';
  specialInstructions?: string;
}