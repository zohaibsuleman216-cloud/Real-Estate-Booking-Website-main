import React from "react";
import "./PropertyManagementServices.css";
import { MdTrendingUp, MdVerifiedUser, MdBuild, MdMonetizationOn } from "react-icons/md";

const PropertyManagementServices = () => {
  return (
    <section className="pms-wrapper">
      <div className="paddings innerWidth flexColCenter pms-container">
        <span className="primaryText">Comprehensive Property Management</span>
        <span className="secondaryText">We handle everything so you don't have to experience the hassle.</span>
        
        <div className="flexCenter pms-grid">
          <div className="flexColStart pms-card">
            <div className="flexStart pms-header">
              <MdTrendingUp size={30} color="var(--blue)" />
              <span className="secondaryText pms-title">Strategic Marketing</span>
            </div>
            <p className="pms-desc">
              We maximize your property's visibility across top rental platforms to minimize vacancy periods and secure top-tier renters.
            </p>
          </div>

          <div className="flexColStart pms-card">
            <div className="flexStart pms-header">
              <MdVerifiedUser size={30} color="var(--blue)" />
              <span className="secondaryText pms-title">Rigorous Screening</span>
            </div>
            <p className="pms-desc">
              Our comprehensive background, credit, and eviction checks ensure we place reliable, responsible tenants in your home.
            </p>
          </div>

          <div className="flexColStart pms-card">
            <div className="flexStart pms-header">
              <MdMonetizationOn size={30} color="var(--blue)" />
              <span className="secondaryText pms-title">Rent Collection & Financials</span>
            </div>
            <p className="pms-desc">
              Enjoy easy online rent collection and detailed monthly financial reporting directly to your owner portal.
            </p>
          </div>

          <div className="flexColStart pms-card">
            <div className="flexStart pms-header">
              <MdBuild size={30} color="var(--blue)" />
              <span className="secondaryText pms-title">24/7 Maintenance</span>
            </div>
            <p className="pms-desc">
              We coordinate all repairs with our network of trusted vendors, ensuring your property is maintained and tenants are happy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyManagementServices;
