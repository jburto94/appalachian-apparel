import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const CategoryBody = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  @media (max-width:500px) {
    padding: 0 15px;
  }
`;

export const CategoryBoxContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:hover ${BackgroundImage} {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:hover ${CategoryBody} {
    opacity: 0.9;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const CategoryTitle = styled.h2`
  font-weight: bold;
  margin: 6px 0 0 0;
  font-size: 22px;
  color: #4a4a4a;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const CategoryText = styled.p`
  font-weight: lighter;
  font-size: 16px;
  color: black;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

// .category-box-container {
//   min-width: 30%;
//   height: 240px;
//   flex: 1 1 auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   margin: 0 7.5px 15px;
//   overflow: hidden;

//   &.large {
//     height: 380px;
//   }

//   &:first-child {
//     margin-right: 7.5px;
//   }

//   &:last-child {
//     margin-left: 7.5px;
//   }
// }