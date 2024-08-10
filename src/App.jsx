import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentButton from './components/PaymentButton';

const API_KEY = import.meta.env.VITE_API_KEY;
// Replace with your own publishable key
const stripePromise = loadStripe(API_KEY);

function App() {
    return (
        <Elements stripe={stripePromise}>
            <div className="App">
                <h1>Stripe Mini-App</h1>
                <div id="payment-buttons">
                    <PaymentButton amount={2000} label="Deposit 20€" />
                    <PaymentButton amount={4000} label="Deposit 40€" />
                    <PaymentButton amount={10000} label="Deposit 100€" />
                </div>
            </div>
        </Elements>
    );
}

export default App;
