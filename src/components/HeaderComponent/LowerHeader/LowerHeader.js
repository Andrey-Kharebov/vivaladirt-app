import React, { useState } from "react";
import { Link } from "react-scroll";
import classes from "./LowerHeader.module.css";

function LowerHeader() {
  const [activeNavBar, setActiveNavBar] = useState(false);

  const changeBG = () => {
    if (window.scrollY >= 100) {
      setActiveNavBar(true);
    } else {
      setActiveNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBG);

  return (
    <div
      className={
        activeNavBar
          ? `${classes.lowerHeader} ${classes.blacked}`
          : classes.lowerHeader
      }
    >
      <div className={classes.headerLogo}>
        <img src="./assets/logo.png" alt="logo"></img>
      </div>
      <div className={classes.headerMenu}>
        <ul>
          <li>
            <Link
             to="about"
             offset={-100}
             smooth={true}
            >about us</Link>
          </li>
          <li><Link
             to="packages"
             smooth={true}
            >packages</Link></li>
          <li><Link
             to="videos"
             smooth={true}
            >videos</Link></li>
          <li><Link
             to="store"
             smooth={true}
            >store</Link></li>
          <li><Link
             to="patreon"
             smooth={true}
            >patreon</Link></li>
          <li><Link
             to="contact"
             offset={-100}
             smooth={true}
            >contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default LowerHeader;
