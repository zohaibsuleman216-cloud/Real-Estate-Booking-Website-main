import React from "react";
import "./MemberBenefits.css";
import { MdPayment, MdVerifiedUser, MdFlashOn } from "react-icons/md";

const MemberBenefits = () => {
  return (
    <section className="benefits-wrapper">
      <div className="paddings innerWidth flexColCenter benefits-container">
        <span className="primaryText">Join Defining Management as a resident</span>
        
        <div className="flexCenter benefits-grid">
          <div className="flexColStart benefit-card">
            <div className="flexStart benefit-header">
              <MdPayment size={30} color="var(--blue)" />
              <span className="secondaryText benefit-title">Flexible payments.</span>
            </div>
            <ul className="benefit-list">
              <li><span className="bullet">✓</span> Affordable prices, paid flexibly</li>
              <li><span className="bullet">✓</span> Choose which day you pay</li>
            </ul>
          </div>

          <div className="flexColStart benefit-card">
            <div className="flexStart benefit-header">
              <MdVerifiedUser size={30} color="var(--blue)" />
              <span className="secondaryText benefit-title">Trusted co-living.</span>
            </div>
            <ul className="benefit-list">
              <li><span className="bullet">✓</span> Identity screening on all residents</li>
              <li><span className="bullet">✓</span> 24/7 support and maintenance</li>
            </ul>
          </div>

          <div className="flexColStart benefit-card">
            <div className="flexStart benefit-header">
              <MdFlashOn size={30} color="var(--blue)" />
              <span className="secondaryText benefit-title">Fast move-ins.</span>
            </div>
            <ul className="benefit-list">
              <li><span className="bullet">✓</span> Instant online approvals</li>
              <li><span className="bullet">✓</span> Move in shortly after booking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberBenefits;
