import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  background-color: #f3f3f3;
  padding: 3rem 0;

  @media (min-width: 300px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 5rem;
    text-align: left;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 10rem;
  }

  @media (min-width: 1200px) {
    gap: 6rem;
  }
`;

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.large};
  margin-bottom: 1.5rem;

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.small};
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.large};
  }
`;

export { Section, Heading };
