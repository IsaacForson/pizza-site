import { Pizza } from '../types';

export const pizzas: Pizza[] = [
  {
    id: '1',
    name: 'Margherita Classic',
    description: 'Fresh mozzarella, Roma tomatoes, fresh basil, and our signature tomato sauce on hand-tossed dough',
    price: 16.99,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'classic',
    ingredients: ['Mozzarella', 'Roma Tomatoes', 'Fresh Basil', 'Tomato Sauce']
  },
  {
    id: '2',
    name: 'Pepperoni Supreme',
    description: 'Premium pepperoni, mozzarella cheese, and tangy tomato sauce on our classic crust',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'classic',
    ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce']
  },
  {
    id: '3',
    name: 'Quattro Stagioni',
    description: 'Artichokes, mushrooms, ham, and olives representing the four seasons',
    price: 24.99,
    image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'specialty',
    ingredients: ['Artichokes', 'Mushrooms', 'Ham', 'Olives', 'Mozzarella']
  },
  {
    id: '4',
    name: 'Vegetarian Delight',
    description: 'Bell peppers, mushrooms, red onions, black olives, and fresh tomatoes',
    price: 21.99,
    image: 'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'vegetarian',
    ingredients: ['Bell Peppers', 'Mushrooms', 'Red Onions', 'Black Olives', 'Tomatoes']
  },
  {
    id: '5',
    name: 'Meat Lovers',
    description: 'Pepperoni, Italian sausage, ham, and ground beef with extra cheese',
    price: 26.99,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'specialty',
    ingredients: ['Pepperoni', 'Italian Sausage', 'Ham', 'Ground Beef', 'Extra Cheese']
  },
  {
    id: '6',
    name: 'Mediterranean',
    description: 'Feta cheese, sun-dried tomatoes, kalamata olives, and fresh herbs',
    price: 23.99,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'vegetarian',
    ingredients: ['Feta Cheese', 'Sun-dried Tomatoes', 'Kalamata Olives', 'Fresh Herbs']
  }
];