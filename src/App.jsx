import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentButton from './components/PaymentButton';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;
// Replace with your own publishable key
console.log(API_KEY); // Check if the key is correctly loaded
const stripePromise = loadStripe(API_KEY);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <div className="inner-div">
          <h1>Stripe Mini-App</h1>
          <div className="payment-buttons">
            <PaymentButton amount={2000} label="Deposit 20€" />
            <PaymentButton amount={4000} label="Deposit 40€" />
            <PaymentButton amount={10000} label="Deposit 100€" />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default App;
