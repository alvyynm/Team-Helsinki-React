import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero" aria-labelledby="heroSection">
      <div className="hero__wrapper">
        <header className="hero__title">
          <h1 id="heroSection">
            Welcome to
            <span className="hero__title--green"> your safe space </span>
            in the tech ecosystem
          </h1>
        </header>
        <div className="hero__content">
          <p className="hero__content__text">
            Finding a job shouldn’t be a job. Tell us what you’re looking for
            and we’ll get it for you. Explore more than 5600+ jobs closeby!
          </p>
          <button className="hero__content__btn" type="button">
            Get Started
          </button>
        </div>
      </div>
      <p className="hero">Hero component</p>
    </section>
  );
}

export default Hero;
