import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";

import myPhoto from "../../assets/images/myphoto.jpg";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* Text Section */}
          <div className="greeting-text-div">
            <div>
              <h1
                className={
                  isDark ? "dark-mode greeting-text" : "greeting-text"
                }
              >
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./Prasenjit_Resume.pdf")}
                    download="Prasenjit_Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="greeting-image-div"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              width: "100%"
            }}
          >
            <img
              src={myPhoto}
              alt="Prasenjit"
              style={{
                borderRadius: "50%",
                width: "100%",
                maxWidth: "386px",
                height: "auto",
                objectFit: "cover",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)"
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
