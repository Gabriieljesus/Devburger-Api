import Stripe from "stripe";
import * as Yup from 'yup'
import 'dotenv/config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
    const total = items.reduce((acc, current) => {
        return acc + current.price * current.quantity;
    }, 0);
   
    return total;
};


const CreatePaymentIntentController = {
  async store(request, response) {
    const schema = Yup.object({
      products: Yup.array().required().of(Yup.object({
        id: Yup.number().required(),
        quantity: Yup.number().required(),
        price: Yup.number().required(),
      })),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      return response.status(400).json({ error: error.errors });
    }

    const { products } = request.body;

    const amount = calculateOrderAmount(products);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "brl",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return response.json({
      clientSecret: paymentIntent.client_secret,
      dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
    });
  }
};

// Exportar o objeto, não a invocação da função
export default CreatePaymentIntentController;