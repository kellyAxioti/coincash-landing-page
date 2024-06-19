import { useState } from "react";
import LogoIcon from "../../icons/components/LogoIcon";
import "./NavBar.css";
import Button from "../Button";
import BurgerIcon from "./BurgerIcon";

const pages = ["Features", "About", "Contact"];

export default function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="top-nav-bar">
      <div className="logo">
        <LogoIcon />
      </div>
      <div className="nav-links" style={{ display: isOpen ? "flex" : "" }}>
        {pages.map((name) => (
          <a key={name}>{name}</a>
        ))}
        <Button label={"Get the App"} />
      </div>
      <BurgerIcon onClick={toggleMenu} />
    </div>
  );
}
