import styled from 'styled-components';
import Button from '../../button/Button.js';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 110px;
  right: 40px;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y:scroll;
`;

export const CartButton = styled(Button)`
  margin-top: auto;
  font-size: 13px;
`;