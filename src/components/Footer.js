import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import deathStar from "./death-star.png";
import { useLocation } from "react-router-dom";

function Footer() {
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

  const location = useLocation();

  return (
    <>
      <div className="footer-container">
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="footer-logo">
              <Link
                to="/my-website/"
                className="social-logo"
                onClick={() => {
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
            </div>
            <small class="website-rights">SHAWNZYLIM © 2023</small>
            <div class="social-icons">
              <Link
                class="social-icon-link instagram"
                to="https://www.instagram.com/shawnzylim/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link github"
                to="https://github.com/Shawnzylim"
                target="_blank"
                aria-label="GitHub"
              >
                <i class="fab fa-github " />
              </Link>
              <Link
                class="social-icon-link linkedin"
                to="https://www.linkedin.com/in/shawn-lim-37b26624b/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
              <Link
                class="social-icon-link email"
                to="mailto:shawnzylim@gmail.com"
                target="_blank"
                aria-label="Email"
              >
                <i class="fa fa-envelope " />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
