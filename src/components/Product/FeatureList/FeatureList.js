import React, { useState } from "react";
import checklist from '../../../img/checklist1.png'
import './FeatureList.css'

const FeatureIcon = (props) => {
  return (
    <div className="product-feature flexbox">
      <div className="product-feature-txt">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
};

function FeatureList() {
  const [features] = useState([
    {
      src: checklist,
      title: "Robot Agent",
      description:
        "We provide a thin client that installs in minutes on a robot",
    },
    {
      src: checklist,
      title: "Powered by cloud servers",
      description:
        "The robot client connects to our cloud servers",
    },
    {
      src: checklist,
      title: "Website for remote monitoring ",
      description:
        "You can then securely log into our web site to connect to, monitor, and control your robots",
    },
    {
      src: checklist,
      title: "Driving and custom commands",
      description:
        "Send driving and other custom commands to the robot.",
    },
    {
      src: checklist,
      title: "Video and telemetry",
      description:
        "View video and telemetry from the robot via in your web browser",
    },
    {
      src: checklist,
      title: "Direct shell access",
      description:
        "Yes! You hear this right. We even provide direct shell access. ",
    }
  ]);

  return (
    <div className="product-feature-list">
      {features.map((ele,index) => {
        return (
          <FeatureIcon
            key={index}
            logo={ele.src}
            title={ele.title}
            description={ele.description}
          ></FeatureIcon>
        );
      })}
    </div>
  );
}

export default FeatureList;
