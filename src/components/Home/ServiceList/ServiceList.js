import React, { useState } from "react";
import { Link } from 'react-scroll';
import "./ServiceList.css";
import service1 from "../../../img/agriculture.png";
import service2 from "../../../img/retail.png";
import service3 from "../../../img/vehicle.png";
import service4 from "../../../img/maker.png";
import service5 from "../../../img/lot.png";
import service6 from "../../../img/research.png";

const Card = (props) => {
  return (
    <div className="card flexbox">
      <div className="icon-container">
        <img src={props.icon} alt=""></img>
      </div>
      <div className="card-name">{props.name}</div>
      {props.description && (
        <div className="card-info">{props.description}</div>
      )}
      {props.btn && <Link to="contact" smooth={true} duraction={500} activeClass=""><div className="card-btn">Contact Us</div></Link>}
    </div>
  );
};

function CardList() {
  const [services] = useState([
    {
      src: service1,
      name: "Agriculture",
    },
    {
      src: service2,
      name: "Retail",
    },
    {
      src: service3,
      name: "Autonomous Vehicles",
    },
    {
      src: service4,
      name: "Maker",
    },
    {
      src: service5,
      name: "loT",
    },
    {
      src: service6,
      name: "Academia/ Research",
    },
  ]);

  return (
    <div className="service-list">
      {services.map((service, index) => {
        return (
          <Card
            key={index}
            icon={service.src}
            name={service.name}
            btn={false}
          />
        );
      })}
      <div className="list-r">
        <Card
          icon={service4}
          name="AND MORE!"
          description="Your industry is not listed here? No worries! Connect with us directly to explore how we can help you and your team to control and monitor remote directly. "
          btn={true}
        />
      </div>
    </div>
  );
}

export default CardList;
