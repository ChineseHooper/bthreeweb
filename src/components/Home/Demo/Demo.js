import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import demo1 from "../../../img/demo-1.png";
import demo2 from "../../../img/demo-2.png";
import demo3 from "../../../img/demo-3.png";
import demo4 from "../../../img/cloud-icon.png";
import "./Demo.css";

const Tab = (props) => {
  return (
    <div className="tab-btn-container flexbox" onClick={() => props.onClick(props.id)}>
      <div className="tab-btn-icon">
        <img src={props.icon} alt="icon" />
      </div>
      <div className="tab-btn-txt">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
};

function Demo(props) {
  const [demoTabs] = useState([
    {
      id: 1,
      src: demo1,
      title: "Remote Control",
      description: "Driving to complex operations",
    },
    {
      id: 2,
      src: demo3,
      title: "Multi-media Connectivity",
      description: "From single unidirectional video stream to full muti-media communications",
    },
    {
      id: 3,
      src: demo2,
      title: "Administrative Access",
      description: "Direct secure root access to the operating systems",
    },
    {
      id: 4,
      src: demo4,
      title: "Cloud-based Telemetry",
      description: "Monitor live and historical metrics.  Get notified immediately is something goes wrong.",
    },
  ]);

  // state for future function
  const [currentDemoIndex, setCurrentDemoIndex] = useState(1);

  const handleCurrentDemo = (id) =>{
    console.log(id)
    setCurrentDemoIndex(id);
  }

  return (
    <div className="demo-container flexbox">
      <div className="demo-tabs flexbox">
        {demoTabs.map((tab, index) => {
          return (
            <Tab
              id={tab.id}
              icon={tab.src}
              title={tab.title}
              description={tab.description}
              key={index}
              onClick={handleCurrentDemo}
            />
          );
        })}
        <HashLink smooth to="/products#header">
          <div className="demo-btn">Learn More</div>
        </HashLink>
      </div>
      <div className="demo-view">
      <div className="demo">{currentDemoIndex}</div>
      </div>
    </div>
  );
}

export default Demo;
