import food from "../../assets/biryani5.png";
import { Button } from "../index";
import { Section, Container, Heading } from "./PopularStyles";

const Popular = () => {
  return (
    <Section>
      <div>
        <img src={food} alt="biryani" width={400} />
      </div>
      <Container>
        <Heading>Lorem ipsum dolor</Heading>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          reiciendis inventore iste ratione ex alias quis magni at optio
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab
          sed, exercitationem minima aliquid eligendi distinctio? Fugit
          repudiandae numquam hic quo recusandae. Excepturi totam ad nam velit
          quasi quidem aspernatur.
        </p>
        <Button>Order Now</Button>
      </Container>
    </Section>
  );
};

export default Popular;
