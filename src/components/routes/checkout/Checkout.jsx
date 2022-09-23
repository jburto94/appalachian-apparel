import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  @media (min-width: 1200px) {
    width: 55%;
  }
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 22%;
  font-size: 13px;

  @media (max-width: 500px) {
    font-size: 11px;
  }

  &:last-child {
    width: 12%;
  }
`;

export const CheckoutTotal = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media (max-width: 500px) {
    font-size: 25px;
  }
`;
