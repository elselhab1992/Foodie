/* eslint-disable react/prop-types */
import { Container, Title, Headings } from "./HeadingStyles";

const Heading = ({ title, heading, info }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Headings>{heading}</Headings>
      <p>{info}</p>
    </Container>
  );
};

export default Heading;
