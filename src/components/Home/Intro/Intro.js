import React from "react";
import figure from '../../../img/banner-figure-front.png';
import './intro.css';
import playBtn from '../../../img/play-button.png'

function Intro() {
  return (
    <div className="banner-container flexbox">
      <div className="banner-figure">
        <div className="figure-rect">
          <img src={figure} alt="banner" />
        </div>
      </div>
      <div className="banner-intro flexbox">
        <h1 className="title">
          Monitor and Control Robots, from anywhere in the world
        </h1>
        <div className="txt">
          bThere.ai provides technology that allows you to remotely monitor and
          control robots, autonomous vehicles, and IoT devices from anywhere in
          the world, with low-latency and high-reliability.
        </div>
        <div className="banner-btn flexbox">
          <div className="button">Get Started</div>
          <div className="btn-video flexbox">
            <img src={playBtn} alt="playbtn" />
            <span>How it Works</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
