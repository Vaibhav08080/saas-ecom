import Stripe from "stripe";
console.log("STRIPE_SECRET_KEY:", process.env.STRIPE_SECRET_KEY);
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);       