import styled from "styled-components";

const SearchContainer = styled.div`
  width: 450px;
  height: 100px;
  margin-right: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  height: 30px;
  width: 30px;
  margin: 0 15px;
`;
const Input = styled.input`
  height: 36px;
  width: 300px;
  -webkit-border-top-left-radius: 0.5rem;
  -webkit-border-bottom-left-radius: 0.5rem;
  -moz-border-radius-topleft: 0.5rem;
  -moz-border-radius-bottomleft: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: #d2d2d2;
  border: 0;
  outline: none;
  padding: 5px;
`;

export { SearchContainer, Img, Input };
