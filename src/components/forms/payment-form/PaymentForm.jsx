import styled from 'styled-components';
import { CardElement } from '@stripe/react-stripe-js';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  width: 500px;
  max-width: 100%;
`;

export const CardElementContainer = styled(CardElement)`
  margin-bottom: 30px;
`;