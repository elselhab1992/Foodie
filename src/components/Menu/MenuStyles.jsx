import styled from "styled-components";

const Section = styled.section`
  padding: 2rem 17rem;
  position: relative;

  @media (min-width: 300px) {
    padding: 10px;
  }

  @media (min-width: 1200px) {
    padding: 2rem 17rem;
  }
`;

const Img = styled.img`
  width: 430px;
  height: 320px;
  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 430px;
  }
`;

const Arrows = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  z-index: 2;
`;

export { Section, Img, Arrows };
