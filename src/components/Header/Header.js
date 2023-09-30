import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <a target="_blank" className="gitbtn link3" href="https://github.com/anton-mel">
          <img className="git" src="./git.png" height={24}/>
        
        anton-mel</a>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="./CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
