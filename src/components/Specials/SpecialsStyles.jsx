import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 300px) {
    gap: 1rem;
    padding: 10px;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
    padding: 2rem;
  }
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10rem;

  @media (min-width: 300px) {
    gap: 3rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10rem;
  }
`;

const Content = styled.div`
  width: 250px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 5px 5px 5px 10px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  transition: 700ms;

  &:hover {
    scale: 1.1;
  }
`;

const Img = styled.img`
  width: 170px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 5px;
  transition: 700ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    cursor: default;
  }
`;

export { Section, TopInfo, Container, Content, Img, Text };
