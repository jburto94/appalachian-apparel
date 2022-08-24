import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
`;

export const ItemInfo = styled.span`
  width: 23%;
`;

export const Quantity = styled(ItemInfo)`
  width: 23%;
  display: flex;
`;

export const Adjustor = styled.span`
  cursor: pointer;
  font-size: 1.5em;
`;

export const Value = styled.span`
  margin: 0 10px;
  display: inline-flex;
  align-items: center;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;