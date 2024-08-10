import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Stripe from 'stripe';
dotenv.config();

const backend_port = process.env.BACKEND_PORT || 3001;
const frontend_port = process.env.FRONTEND_PORT || 5173;


const app = express();
const API_KEY = process.env.VITE_SECRET_KEY;
//console.log(API_KEY); // Check if the key is correctly loaded
const stripe = Stripe(API_KEY);

app.use(cors());
app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
    const { amount } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Deposit',
                    },
                    unit_amount: parseInt(amount),
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `http://localhost:${frontend_port}/success`,
            cancel_url: `http://localhost:${frontend_port}/cancel`,
        });

        res.json( session.id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(backend_port, () => console.log(`Server running on port ${backend_port}`));
