import styled from "styled-components";

const OneCardContainer = styled.div`
  background-color: #d2d2d2;
  display: flex;
  flex-direction: column;

  align-items: center;
  border-radius: 10px;
  height: 400px;
  width: 300px;
  margin: 30px 25px;
  border: thin solid #d2d2d2;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.08);
  }
`;

const CardImage = styled.img`
  height: 300px;
  width: 300px;
  -webkit-border-top-left-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-topright: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 1.4rem;
  color: #373737;
`;

export { OneCardContainer, CardImage, CardText };
