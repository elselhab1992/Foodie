import styled from "styled-components";

const FooterContent = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  padding: 3rem 17rem;
  gap: 2rem;

  @media (min-width: 300px) {
    padding: 10px;
  }

  @media (min-width: 1200px) {
    padding: 3rem 17rem;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 1.5rem;
  padding-bottom: 1rem;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid #ccc;

  @media (min-width: 300px) {
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 1.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const Logo = styled.img`
  width: 40px;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

const FooterInfo = styled.p`
  margin-top: 0.5rem;
  width: 80%;
`;

const FooterIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export {
  FooterContent,
  FooterContainer,
  LogoContainer,
  Logo,
  FooterItem,
  FooterInfo,
  FooterIcons,
};
