import { Heading } from "../index";
import { services } from "../../data";
import {
  Section,
  TopInfo,
  Container,
  Content,
  Img,
  Text,
} from "./SpecialsStyles";

const Specials = () => {
  return (
    <Section id="specials">
      <TopInfo>
        <Heading
          title="Our Specials"
          heading="Specials
"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?"
        />
      </TopInfo>
      <Container>
        {services.map((service) => {
          const { id, img, title, info } = service;

          return (
            <Content key={id}>
              <Img src={img} alt={title} />
              <Text>
                <h3>{title}</h3>
                <p>{info}</p>
              </Text>
            </Content>
          );
        })}
      </Container>
    </Section>
  );
};

export default Specials;
