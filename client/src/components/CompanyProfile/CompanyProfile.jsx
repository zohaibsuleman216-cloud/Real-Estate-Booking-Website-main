import React, { useState } from "react";
import "./CompanyProfile.css";
import { motion, AnimatePresence } from "framer-motion";

const companyData = {
  overview: "Defining Management is a property management services company specializing in the acquisition, management, and leasing of residential rental properties. Founded on principles of transparency, efficiency, and accountability, the company provides a modern, tech-driven approach to property and tenant management. Our operational model is built around clearly defined team roles, streamlined digital workflows, and centralized communication.",
  mission: "Our mission is to simplify the property management process through smart systems, proactive communication, and a consistent standard of excellence—ultimately creating value for both landlords and tenants.",
  objectives: [
    "Maintain operational clarity across all staff roles and processes",
    "Ensure compliance with documented internal protocols",
    "Manage digital systems to streamline communication, documentation, and lead handling",
    "Provide responsive and respectful support to both tenants and property owners",
    "Minimize vacancy periods through efficient marketing and tenant placement",
    "Maximize property owner returns through proactive management"
  ],
  ecosystem: [
    { title: "Property Management Software", desc: "Comprehensive solutions for listings, applications, leases, and maintenance." },
    { title: "Marketing Platforms", desc: "Targeted marketing to generate quality tenant leads." },
    { title: "Specialized Rentals Hub", desc: "Connecting with seekers for specific rental arrangements." },
    { title: "Unified Communication", desc: "Centralized phone and instant messaging systems." },
    { title: "CRM & Workflows", desc: "Streamlined tracking for leads, deals, and internal operations." },
    { title: "Secure Payments", desc: "Reliable and encrypted monthly rent collection processing." },
    { title: "Team Collaboration", desc: "Internal chat and project coordination tools." },
    { title: "Email Services", desc: "Professional and branded correspondence channel." }
  ],
  team: [
    { role: "Owner/Strategic Director", name: "Wendell Catlett" },
    { role: "Systems Manager", name: "Muhammad Suleman" },
    { role: "Leasing Coordinator", name: "Ali" },
    { role: "On-Site Manager", name: "Arrington Edwards" }
  ]
};

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="cp-wrapper" id="company-profile">
      <div className="paddings innerWidth cp-container">
        
        <div className="flexColCenter cp-header">
          <span className="orangeText">About Us</span>
          <span className="primaryText">Who We Are</span>
          <span className="secondaryText">Get to know the ecosystem behind Defining Management.</span>
        </div>

        <div className="cp-content">
          <div className="cp-tabs">
            {['overview', 'mission', 'objectives', 'ecosystem', 'team'].map(tab => (
              <button 
                key={tab} 
                className={`cp-tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="cp-tab-content">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div 
                  key="overview"
                  className="cp-text-box"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  <p className="secondaryText" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                    {companyData.overview}
                  </p>
                </motion.div>
              )}

              {activeTab === 'mission' && (
                <motion.div 
                  key="mission"
                  className="cp-text-box"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  <p className="secondaryText" style={{ fontSize: "1.2rem", fontStyle: "italic", textAlign: "center", fontWeight: "500", color: "var(--blue)" }}>
                    "{companyData.mission}"
                  </p>
                </motion.div>
              )}

              {activeTab === 'objectives' && (
                <motion.ul 
                  key="objectives"
                  className="cp-list"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  {companyData.objectives.map((obj, i) => (
                    <li key={i} className="secondaryText">{obj}</li>
                  ))}
                </motion.ul>
              )}

              {activeTab === 'ecosystem' && (
                <motion.div 
                  key="ecosystem"
                  className="cp-grid"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  {companyData.ecosystem.map((sys, i) => (
                    <div className="cp-card" key={i}>
                      <span className="cp-card-title">{sys.title}</span>
                      <span className="cp-card-desc secondaryText">{sys.desc}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'team' && (
                <motion.div 
                  key="team"
                  className="cp-grid"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  {companyData.team.map((member, i) => (
                    <div className="cp-member-card" key={i}>
                      <div className="cp-avatar">{member.name.charAt(0)}</div>
                      <span className="cp-card-title">{member.name}</span>
                      <span className="cp-card-desc secondaryText">{member.role}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyProfile;
