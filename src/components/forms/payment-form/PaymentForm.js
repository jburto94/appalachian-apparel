import { useState, useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '../../button/Button';
import { UserContext } from '../../../context/UserContext';

import { PaymentFormContainer, FormContainer } from './PaymentForm.jsx';

const PaymentForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { currentUser } = useContext(UserContext);
  const [processingPayment, setProcessingPayment] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: total * 100 })
    }).then(res => res.json());

    const { paymentIntent: { client_secret }} = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest'
        }
      }
    });

    setProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('payment successful');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button disabled={processingPayment} buttonType='inverted'>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;