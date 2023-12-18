/* eslint-disable react/prop-types */
import { SideBar, MobileLink, Button } from "./SidebarStyles";
import { IoMdCart } from "react-icons/io";

const Sidebar = ({ click, closeMenu }) => {
  return (
    <aside>
      <SideBar menu={+click}>
        <li>
          <MobileLink to="/" onClick={closeMenu}>
            Home
          </MobileLink>
        </li>
        <li>
          <MobileLink to="/" onClick={closeMenu}>
            About
          </MobileLink>
        </li>
        <li>
          <MobileLink to="/" onClick={closeMenu}>
            Contact
          </MobileLink>
        </li>
        <li>
          <MobileLink to="/">
            <Button>
              Order
              <span>
                <IoMdCart size={20} />
              </span>
            </Button>
          </MobileLink>
        </li>
      </SideBar>
    </aside>
  );
};

export default Sidebar;
