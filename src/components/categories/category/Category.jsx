import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  column-gap: 20px;
  row-gap: 50px;
`;