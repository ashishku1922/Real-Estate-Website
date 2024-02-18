import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-warpper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon.
          </span>
          <button className="button">
            <a href="mailto:warriorashish19">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
