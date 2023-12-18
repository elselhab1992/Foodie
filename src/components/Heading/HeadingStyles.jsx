import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;

  @media (min-width: 300px) {
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1200px) {
    width: 55%;
  }
`;

const Title = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSize.small};
`;

const Headings = styled.h2`
  font-size: ${(props) => props.theme.fontSize.large};
`;

export { Container, Title, Headings };
