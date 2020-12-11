import React, { useState } from "react";
import { Link } from "react-scroll";
import classes from "./LowerHeader.module.css";

function LowerHeader() {
  const [activeNavBar, setActiveNavBar] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const changeBG = () => {
    if (window.innerWidth >= 982) {
      if (window.scrollY >= 100) {
        setActiveNavBar(true);
      } else {
        setActiveNavBar(false);
      }
    }
  };

  window.addEventListener("scroll", changeBG);

  const mobileMenuHandler = () => {
    setMobileMenuActive(a => !a);
  }

  return (
    <div className={  activeNavBar ? `${classes.lowerHeader} ${classes.blacked}` : classes.lowerHeader }>
      <div className={classes.headerLogo}>
        <img src="./assets/logo.png" alt="logo"></img>
      </div>
      <div className={ classes.burgerMenu } onClick={ mobileMenuHandler }>
        <i className="fas fa-bars"></i>
      </div>
      <div className={  mobileMenuActive ? `${classes.headerMenu} ${classes.activeMobileMenu}` : classes.headerMenu }>
        <ul>
            <Link
             to="about"
             offset={-100}
             smooth={true}
             onClick={ mobileMenuHandler }
            ><li>about us</li></Link>
          
        
            <Link
             to="packages"
             smooth={true}
             onClick={ mobileMenuHandler }
            ><li>packages</li></Link>
          
        
            <Link
             to="videos"
             smooth={true}
             onClick={ mobileMenuHandler }
            ><li>videos</li></Link>
          
        
            <Link
             to="store"
             smooth={true}
             onClick={ mobileMenuHandler }
            ><li>store</li></Link>
          
        
            <Link
             to="patreon"
             smooth={true}
             onClick={ mobileMenuHandler }
            ><li>patreon</li></Link>
          
            <Link
             to="contact"
             offset={-100}
             smooth={true}
             onClick={ mobileMenuHandler }
            ><li>contact</li></Link>
          
        </ul>
      </div>
    </div>
  );
}

export default LowerHeader;
