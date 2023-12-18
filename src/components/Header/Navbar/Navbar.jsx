/* eslint-disable react/prop-types */
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/food-logo.png";
import {
  Header,
  LogoContainer,
  Logo,
  NavIcons,
  NavLinks,
  NavLink,
  Button,
} from "./NavbarStyles";
import { IoMdCart } from "react-icons/io";

function Navbar({ click, handleClick }) {
  return (
    <Header>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
        <span>Foodie</span>
      </LogoContainer>

      <nav>
        <NavLinks>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/">
              <Button>
                Order
                <span>
                  <IoMdCart size={20} />
                </span>
              </Button>
            </NavLink>
          </li>
        </NavLinks>
      </nav>
      <NavIcons onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#000", cursor: "pointer" }} />
        ) : (
          <FaBars size={30} style={{ color: "#000", cursor: "pointer" }} />
        )}
      </NavIcons>
    </Header>
  );
}

export default Navbar;
