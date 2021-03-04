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
          <span className="color-1">H</span>
          <span className="color-2">a</span>
          <span className="color-3">p</span>
          <span className="color-4">p</span>
          <span className="color-5">y</span>
        </div>
        <div className="spacing">
          <span className="color-6">b</span>
          <span className="color-7">i</span>
          <span className="color-8">r</span>
          <span className="color-9">t</span>
          <span className="color-10">h</span>
          <span className="color-11">d</span>
          <span className="color-12">a</span>
          <span className="color-13">y</span>
        </div>
        <div className="spacing">
          <span className="color-14">t</span>
          <span className="color-15">o</span>
        </div>
        <div className="spacing">
          <span className="color-16">m</span>
          <span className="color-17">e</span>
        </div>
      </div>
    </div>
  );
}
