import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 10rem;
  gap: 5rem;

  @media (min-width: 300px) {
    flex-direction: column;
    gap: 1rem;
    padding: 10px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    padding: 1rem 10rem;
    gap: 5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  width: 40%;

  @media (min-width: 300px) {
    text-align: center;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 1024px) {
    text-align: left;
    align-items: flex-start;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`;

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.large};
`;

export { Section, Container, Heading };
