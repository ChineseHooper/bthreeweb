import React from "react";
import { HashLink } from 'react-router-hash-link';
import figure1 from "../../../img/figure-1.png";
import figure2 from "../../../img/figure-2.png";
import figure3 from "../../../img/figure-3.png";
import './UserFlow.css';

const UserflowCard = (props) => {
  return (
    <div className="uf-card-container card">
      <div className="uf-figure" style={{ backgroundImage: `url(${props.figure})` }}></div>
      <div className="uf-title">{props.title}</div>
      <div className="description">{props.description}</div>
    </div>
  );
};

const GetStart = (props) => {
  return (
    <div className="get-start-container card flexbox">
      <div className="get-start-txt">
        <div className="txt-title">Join our beta...</div>
        <div className="description">
          Being part of the beta is at no cost to you! Get early access to bThere’s advanced solutions.
          Limited space available.
        </div>
      </div>
      <div className="get-start-btn">
        <HashLink to="/#contact" smooth><div className="btn-body" onClick={props.onClick}>Contact Us</div></HashLink>
      </div>
    </div>
  );
};

function UserFlow(props) {
  return (
    <div className="user-flow-container flexbox">
      <div className="user-flow-top flexbox">
        <UserflowCard
          figure={figure1}
          title="Sign up"
          description="We provide software as a service to allow developers, end users, or operations staff to remotely monitor and control robots."
        ></UserflowCard>
        <UserflowCard
          figure={figure2}
          title="Connect"
          description="We provide software as a service to allow developers, end users, or operations staff to remotely monitor and control robots."
        ></UserflowCard>
        <UserflowCard
          figure={figure3}
          title="Remote Control"
          description="We provide software as a service to allow developers, end users, or operations staff to remotely monitor and control robots."
        ></UserflowCard>
      </div>
      <div className="user-flow-bottom">
        <GetStart onClick={props.onClick}></GetStart>
      </div>
    </div>
  );
}

export default UserFlow;