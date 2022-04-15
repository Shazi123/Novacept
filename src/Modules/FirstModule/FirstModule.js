import React from "react";
import home from "../../images/background.png";
import homeCover from "../../images/home-cover-bg.webp";
import "./firstModule.css";

function FirstModule() {
  return (
    <div className="homeContent">
      <img src={home} alt="HomeImg" className="home" />
      <img
        className="home-cover"
        src={homeCover}
        alt="Home Background Cover Image"
        height="123%"
        width="65%"
      />
      <div className="col-lg-6 col-md-6 col-sm-6 home-section">
        <h1 className="home-heading">Thinking Forward</h1>
        <p className="home-text">
          We use technology to solve real world problems, helping organizations
          improve their day to day operations and give more focus to customer
          related activities.
        </p>
      </div>
    </div>
  );
}
export default FirstModule;
