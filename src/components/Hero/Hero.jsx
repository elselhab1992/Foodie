import { PrimaryButton } from "../index";
import { imgList } from "../../data";
import {
  Section,
  InfoContainer,
  Heading,
  Span,
  ImgContainer,
  MainImg,
  RightContainer,
  SideImgs,
} from "./HeroStyles";
import { useState } from "react";

const Hero = () => {
  const [image, setImage] = useState(imgList[0]);

  return (
    <Section id="home">
      <InfoContainer>
        <Heading>
          Welcome to the
          <br /> <Span>Foodie</Span> Zone
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint
          ex quod quos neque reprehenderit nihil suscipit iure vero deserunt.
        </p>
        <PrimaryButton>Order Now</PrimaryButton>
      </InfoContainer>
      <RightContainer>
        {/* main img */}
        <ImgContainer>
          <MainImg src={image.img} alt="biryani" />
        </ImgContainer>
        {/* side imgs */}
        <SideImgs>
          {imgList.map((imgs) => {
            const { img, id } = imgs;

            return (
              <img
                key={id}
                src={img}
                alt="food"
                width={100}
                onClick={() => {
                  setImage(
                    id === 1 ? imgList[0] : id === 2 ? imgList[1] : imgList[2]
                  );
                }}
              />
            );
          })}
        </SideImgs>
      </RightContainer>
    </Section>
  );
};

export default Hero;
