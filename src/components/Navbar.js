import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import deathStar from "./death-star.png";
import { useLocation } from "react-router-dom";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const jump = () => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const location = useLocation();

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/my-website/"
            className="navbar-logo"
            onClick={() => {
              closeMobileMenu();
              if (location.pathname === "/my-website/") {
                scroll();
              } else {
                jump();
              }
            }}
          >
            SHAWN
            <img src={deathStar} alt="logo" className="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/my-website/"
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  if (location.pathname === "/my-website/") {
                    scroll();
                  } else {
                    jump();
                  }
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gaming"
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  if (location.pathname === "/gaming") {
                    scroll();
                  } else {
                    jump();
                  }
                }}
              >
                Gaming
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  if (location.pathname === "/projects") {
                    scroll();
                  } else {
                    jump();
                  }
                }}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/contact-me"
                className="nav-links-mobile"
                onClick={() => {
                  closeMobileMenu();
                  if (location.pathname === "/contact-me") {
                    scroll();
                  } else {
                    jump();
                  }
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle="btn--outline"
              where="/contact-me"
              onClick={() => {
                if (location.pathname === "/contact-me") {
                  scroll();
                } else {
                  jump();
                }
              }}
            >
              Contact
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
