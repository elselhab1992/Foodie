import logo from "../../assets/food-logo.png";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  FooterContent,
  FooterContainer,
  LogoContainer,
  Logo,
  FooterItem,
  FooterInfo,
  FooterIcons,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContent>
      <FooterContainer>
        <div>
          <LogoContainer>
            <Logo src={logo} alt="logo" />
            <span>Foodie</span>
          </LogoContainer>
          <FooterItem>
            <FooterInfo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum
              tenetur.
            </FooterInfo>
            <p>
              <span style={{ marginRight: 10 }}>
                <FaLocationArrow />
              </span>
              Noida, Uttar Pradesh
            </p>
            <p>
              <span style={{ marginRight: 10 }}>
                <FaMobileAlt />
              </span>
              +91 123456789
            </p>
            <FooterIcons>
              <FaFacebook size={30} />
              <FaLinkedin size={30} />
              <FaInstagramSquare size={30} />
            </FooterIcons>
          </FooterItem>
        </div>
        <FooterItem>
          <h3>Important Links</h3>
          <p>Home</p>
          <p>about</p>
          <p>services</p>
          <p>Login</p>
        </FooterItem>
        <FooterItem>
          <h3>Important Links</h3>
          <p>Home</p>
          <p>about</p>
          <p>services</p>
          <p>Login</p>
        </FooterItem>
        <FooterItem>
          <h3>Important Links</h3>
          <p>Home</p>
          <p>about</p>
          <p>services</p>
          <p>Login</p>
        </FooterItem>
      </FooterContainer>
      <p>@copyright 2022 All rights reserved</p>
    </FooterContent>
  );
};

export default Footer;
