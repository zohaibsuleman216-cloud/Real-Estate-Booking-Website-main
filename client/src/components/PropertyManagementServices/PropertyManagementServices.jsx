import React from "react";
import "./PropertyManagementServices.css";
import { motion } from "framer-motion";
import { 
  MdCampaign, 
  MdTrendingUp, 
  MdForum, 
  MdAssignment, 
  MdAssessment, 
  MdSavings, 
  MdPayment, 
  MdHomeWork 
} from "react-icons/md";

const services = [
  {
    icon: <MdHomeWork size={40} />,
    title: "Custom Property Listing",
    desc: "Professional photoshoot and search-friendly descriptions maximize who sees your rental.",
    gradient: "linear-gradient(135deg, rgba(31,62,114,0.1) 0%, rgba(31,62,114,0.05) 100%)",
    iconColor: "var(--blue)"
  },
  {
    icon: <MdCampaign size={40} />,
    title: "Marketing & Promotion",
    desc: "We get your listing in front of millions and manage your calendar across top booking sites.",
    gradient: "linear-gradient(135deg, rgba(31,62,114,0.1) 0%, rgba(31,62,114,0.05) 100%)",
    iconColor: "var(--blue)"
  },
  {
    icon: <MdTrendingUp size={40} />,
    title: "Revenue Optimization",
    desc: "Dynamic rate adjustments and customized strategies help you earn the most in any climate.",
    gradient: "linear-gradient(135deg, rgba(31,62,114,0.1) 0%, rgba(31,62,114,0.05) 100%)",
    iconColor: "var(--blue)"
  },
  {
    icon: <MdForum size={40} />,
    title: "Guest Communications",
    desc: "We tackle questions, check-in details, and review reminders to boost your reputation.",
    gradient: "linear-gradient(135deg, rgba(31,62,114,0.1) 0%, rgba(31,62,114,0.05) 100%)",
    iconColor: "var(--blue)"
  },
  {
    icon: <MdAssignment size={40} />,
    title: "Handle Any Leasing Task",
    desc: "Comprehensive marketing includes eye-catching signage, online marketing, and MLS listings.",
    gradient: "linear-gradient(135deg, rgba(31,62,114,0.1) 0%, rgba(31,62,114,0.05) 100%)",
    iconColor: "var(--blue)"
  },
  {
    icon: <MdAssessment size={40} />,
    title: "Accurate Reporting",
    desc: "Timely operating statements provided monthly. Reports can be viewed online or sent via email.",
    gradient: "linear-gradient(135deg, rgba(31,62,114,0.1) 0%, rgba(31,62,114,0.05) 100%)",
    iconColor: "var(--blue)"
  },
  {
    icon: <MdSavings size={40} />,
    title: "Expense Reduction",
    desc: "Aggressive energy and water conservation strategies. Renegotiation of service contracts.",
    gradient: "linear-gradient(135deg, rgba(31,62,114,0.1) 0%, rgba(31,62,114,0.05) 100%)",
    iconColor: "var(--blue)"
  },
  {
    icon: <MdPayment size={40} />,
    title: "Flexible Payments",
    desc: "Receive fast, secure payouts and manage all financial transactions with total transparency.",
    gradient: "linear-gradient(135deg, rgba(31,62,114,0.1) 0%, rgba(31,62,114,0.05) 100%)",
    iconColor: "var(--blue)"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100 }
  }
};

const PropertyManagementServices = () => {
  return (
    <section className="pms-wrapper" id="services">
      <div className="paddings innerWidth flexColCenter pms-container">
        <div className="pms-header-text">
          <span className="highlightText">Our Services</span>
          <span className="primaryTextLight">Comprehensive Property Management</span>
          <span className="secondaryTextLight">Experience hassle-free management with our premium, end-to-end solutions.</span>
        </div>
        
        <motion.div 
          className="pms-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="pms-card-modern"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.15)"
              }}
            >
              <div 
                className="pms-icon-wrapper"
                style={{ background: service.gradient, color: service.iconColor }}
              >
                {service.icon}
              </div>
              <span className="primaryText pms-card-title">{service.title}</span>
              <p className="secondaryText pms-card-desc">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyManagementServices;
