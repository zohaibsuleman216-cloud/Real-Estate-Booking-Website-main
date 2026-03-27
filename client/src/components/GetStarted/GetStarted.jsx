import React, { useState } from "react";
import "./GetStarted.css";
import ContactModal from "../ContactModal/ContactModal";

const GetStarted = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryTextLight">Get started with Defining Management</span>
          <span className="secondaryTextLight">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button" onClick={() => setModalOpened(true)}>
            Get Started
          </button>
        </div>
      </div>
      <ContactModal opened={modalOpened} setOpened={setModalOpened} />
    </div>
  );
};

export default GetStarted;
