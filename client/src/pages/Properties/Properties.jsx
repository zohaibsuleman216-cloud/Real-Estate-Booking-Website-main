import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
const Properties = () => {
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        
        {/* PREMIUM TURBOTENANT CONTAINER */}
        <div style={{
          width: '100%', 
          maxWidth: '1100px',
          margin: '2rem auto 4rem auto',
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

export default Properties;
