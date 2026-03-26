import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import {PuffLoader} from 'react-spinners'

const Residencies = () => {

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Find your perfect home</span>
          <span className="primaryText">Explore our properties</span>
        </div>
        
        {/* PREMIUM TURBOTENANT CONTAINER */}
        <div style={{
          width: '100%', 
          maxWidth: '1100px',
          margin: '3rem auto',
          background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          boxShadow: '0 40px 80px rgba(31, 62, 114, 0.12), inset 0 2px 4px rgba(255,255,255,0.8)',
          padding: '2.5rem',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Elegant Top Decorative Border */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '8px',
            background: 'var(--blue-gradient)'
          }}></div>
          
          <iframe 
            style={{
              border: "none", 
              borderRadius: "16px", 
              display: "block",
              backgroundColor: "transparent"
            }} 
            src="https://rental.turbotenant.com/embedpropertylist.html#/QmFzaWNVc2VyUHJvZmlsZTo4MDQ3MDY=" 
            height="3200" 
            width="100%"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Residencies;
