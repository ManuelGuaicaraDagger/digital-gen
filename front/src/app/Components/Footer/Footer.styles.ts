import styled from "styled-components";

const FooterCont = styled.footer`
  min-height: 50px;
  background-color: #373737;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 190px;
`;

const FooterSpan = styled.span`
  color: #9f9f9f;
`;

const FooterUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const FooterLi = styled.li`
  color: #d2d2d2;
  color: #9f9f9f;
  margin: 0 100px;
`;

const FooterLiImg = styled.li`
  margin: 0 15px;
  display: flex;
  align-items: center;
`;

const FooterImg = styled.img`
  height: 30px;
`;

const FooterA = styled.a`
  display: flex;
  align-items: center;
`;

export {
  FooterCont,
  FooterSpan,
  FooterUl,
  FooterLi,
  FooterImg,
  FooterLiImg,
  FooterA,
};
