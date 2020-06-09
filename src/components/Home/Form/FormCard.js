import React, { useState } from "react";
import './FormCard.css'

function FormCard(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="card form-container flexbox">
      <div className="form-title">Contact Us</div>
      <form onSubmit={handleSubmit}>
        <div className="ip-group">
          <label>Full Name</label>
          <input type="text" placeholder="Remote Control" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="ip-group">
          <label>Email</label>
          <input type="text" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="ip-group">
          <label>Tell us about you needs</label>
          <textarea placeholder={props.placeholder} value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <input type="submit" value="SEND" />
      </form>
    </div>
  );
}

export default FormCard;
