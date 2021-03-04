import React from "react";
import "./homepage.scss";
import background from "../asset/background.jpg";
import logo from "../asset/logo-a.png";
export default function Homepage() {
  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="logo-container">
        <img src={logo} className="logo" alt="none" />
      </div>
      <div className="text-box">
        <div className="spacing">
          <span>H</span>
          <span>a</span>
          <span>p</span>
          <span>p</span>
          <span>y</span>
        </div>
        <div className="spacing">
          <span>b</span>
          <span>i</span>
          <span>r</span>
          <span>t</span>
          <span>h</span>
          <span>d</span>
          <span>a</span>
          <span>y</span>
        </div>
        <div className="spacing">
          <span>t</span>
          <span>o</span>
        </div>
        <div className="spacing">
          <span>m</span>
          <span>e</span>
        </div>
      </div>
    </div>
  );
}
