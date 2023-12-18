import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { menu } from "../../data";
import { Section, Img, Arrows } from "./MenuStyles";

const Menu = () => {
  return (
    <Section>
      <Swiper {...sliderSettings}>
        <SliderButtons />
        {menu.map((item) => {
          const { id, img } = item;

          return (
            <SwiperSlide key={id}>
              <Img src={img} alt="food" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
};

export default Menu;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <Arrows>
      <FaArrowAltCircleLeft
        onClick={() => swiper.slidePrev()}
        size={30}
        style={{ cursor: "pointer" }}
      />
      <FaArrowAltCircleRight
        onClick={() => swiper.slideNext()}
        size={30}
        style={{ cursor: "pointer" }}
      />
    </Arrows>
  );
};

const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
};
