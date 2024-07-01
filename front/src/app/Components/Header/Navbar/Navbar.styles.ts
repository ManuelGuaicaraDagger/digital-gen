import styled from "styled-components";

const NavContainer = styled.div`
  width: 680px;
  height: 110px;
  margin-left: 190px;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  height: 80px;
  width: auto;
`;
const Ul = styled.ul`
  display: flex;
  font-size: 20px;
  color: white;
`;
const Li = styled.li`
  width: auto;
  margin: 0 25px;
  display: inline-block;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.6s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export { NavContainer, Img, Ul, Li };
