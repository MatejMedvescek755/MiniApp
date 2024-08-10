import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';

const PaymentButton = ({ amount, label }) => {
    const stripe = useStripe();

    const handleClick = async () => {
        if (!stripe) {
            return;
        }

        const response = await fetch('http://localhost:3000/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount }),
        });

        const sessionId = await response.json();

        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
            console.error('Error:', error);
        }
    };

    return <button onClick={handleClick}>{label}</button>;
};

export default PaymentButton;
