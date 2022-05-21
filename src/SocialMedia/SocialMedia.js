import React, { useState } from "react";
import "./SocialMedia.scss";

const socialsContent = [
  {
    icon: require("../icons/github.png"),
    account: "Github",
    link: "https://github.com/stellarie",
  },
  {
    icon: require("../icons/twitter.png"),
    account: "Twitter",
    link: "https://twitter.com/alecs_gaspar",
  },
  {
    icon: require("../icons/linkedin.png"),
    account: "LinkedIn",
    link: "https://linkedin.com/in/alecsgaspar",
  },
];

const SocialMedia = () => {
  return (
    <>
      <div className="socials">
        <div className="socials-title">Reach me here!</div>
        <div className="socials-content">
          {socialsContent.map((c, i) => {
            return (
              <a
                className="socials-wrapper"
                href={c.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="socials-link">
                  <img src={c.icon} className="socials-icon" />
                </div>
                <div className="socials-account">
                  {c.account}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
