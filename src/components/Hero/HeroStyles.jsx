import styled, { keyframes } from "styled-components";
import img from "../../assets/vector3.png";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: #f3f3f3;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8rem 17rem;

  @media (min-width: 300px) {
    flex-direction: column-reverse;
    padding: 5px;
  }

  @media (min-width: 768px) {
    padding: 70px 5px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    padding: 8rem 17rem;
  }
`;

const spin = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);

}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  @media (min-width: 300px) {
    align-items: center;
    text-align: center;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const Heading = styled.h1`
  font-weight: ${(props) => props.theme.fontWeight.bolder};
  font-size: ${(props) => props.theme.fontSize.xl};
  line-height: 1;

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.large};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) {
    width: 80%;
    height: 300px;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 350px;
  }
`;

const MainImg = styled.img`
  width: 100%;
  animation: ${spin} infinite 50s linear;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    gap: 7rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`;

const SideImgs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

export {
  Section,
  InfoContainer,
  Heading,
  Span,
  ImgContainer,
  MainImg,
  RightContainer,
  SideImgs,
};
