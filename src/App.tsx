import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Cart } from './components/Cart';
import { CheckoutForm } from './components/CheckoutForm';
import { OrderConfirmation } from './components/OrderConfirmation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Locations } from './pages/Locations';
import { Pizza, CartItem, OrderDetails } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const sizeMultipliers = {
    small: 0.8,
    medium: 1,
    large: 1.3
  };

  const handleAddToCart = (pizza: Pizza, size: 'small' | 'medium' | 'large') => {
    const price = pizza.price * sizeMultipliers[size];
    const existingItemIndex = cartItems.findIndex(
      item => item.pizza.id === pizza.id && item.size === size
    );

    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      updatedItems[existingItemIndex].totalPrice += price;
      setCartItems(updatedItems);
    } else {
      const newItem: CartItem = {
        pizza,
        quantity: 1,
        size,
        totalPrice: price
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleUpdateQuantity = (itemIndex: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemIndex);
      return;
    }

    const updatedItems = [...cartItems];
    const item = updatedItems[itemIndex];
    const pricePerItem = item.totalPrice / item.quantity;
    
    updatedItems[itemIndex] = {
      ...item,
      quantity: newQuantity,
      totalPrice: pricePerItem * newQuantity
    };
    
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (itemIndex: number) => {
    const updatedItems = cartItems.filter((_, index) => index !== itemIndex);
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSubmit = (orderDetails: OrderDetails) => {
    if (orderDetails.paymentMethod === 'card') {
      // For card payments, we would integrate with Stripe here
      alert('For card payments, Stripe integration would be implemented. Please set up Stripe to continue.');
      return;
    }
    
    // Generate order number
    const newOrderNumber = Math.random().toString(36).substr(2, 8).toUpperCase();
    setOrderNumber(newOrderNumber);
    
    // Clear cart and show confirmation
    setCartItems([]);
    setIsCheckoutOpen(false);
    setIsOrderConfirmed(true);
  };

  const handleOrderConfirmationClose = () => {
    setIsOrderConfirmed(false);
    setOrderNumber('');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = subtotal > 25 ? 0 : 3.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation cartItemCount={totalItems} onCartToggle={() => setIsCartOpen(true)} />
        
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/menu" element={<Menu onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>

        <Footer />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />

        <CheckoutForm
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          onSubmit={handleOrderSubmit}
          total={total}
        />

        <OrderConfirmation
          isOpen={isOrderConfirmed}
          onClose={handleOrderConfirmationClose}
          orderNumber={orderNumber}
        />
      </div>
    </Router>
  );
}

export default App;
