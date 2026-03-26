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
    gradient: "linear-gradient(135deg, #1fa2ff 0%, #12d8fa 100%)"
  },
  {
    icon: <MdCampaign size={40} />,
    title: "Marketing & Promotion",
    desc: "We get your listing in front of millions and manage your calendar across top booking sites.",
    gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)"
  },
  {
    icon: <MdTrendingUp size={40} />,
    title: "Revenue Optimization",
    desc: "Dynamic rate adjustments and customized strategies help you earn the most in any climate.",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
  },
  {
    icon: <MdForum size={40} />,
    title: "Guest Communications",
    desc: "We tackle questions, check-in details, and review reminders to boost your reputation.",
    gradient: "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)"
  },
  {
    icon: <MdAssignment size={40} />,
    title: "Handle Any Leasing Task",
    desc: "Comprehensive marketing includes eye-catching signage, online marketing, and MLS listings.",
    gradient: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)"
  },
  {
    icon: <MdAssessment size={40} />,
    title: "Accurate Reporting",
    desc: "Timely operating statements provided monthly. Reports can be viewed online or sent via email.",
    gradient: "linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)"
  },
  {
    icon: <MdSavings size={40} />,
    title: "Expense Reduction",
    desc: "Aggressive energy and water conservation strategies. Renegotiation of service contracts.",
    gradient: "linear-gradient(135deg, #0cebeb 0%, #20e3b2 50%, #29ffc6 100%)"
  },
  {
    icon: <MdPayment size={40} />,
    title: "Flexible Payments",
    desc: "Receive fast, secure payouts and manage all financial transactions with total transparency.",
    gradient: "linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%)"
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
          <span className="orangeText">Our Services</span>
          <span className="primaryText">Comprehensive Property Management</span>
          <span className="secondaryText">Experience hassle-free management with our premium, end-to-end solutions.</span>
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
                style={{ background: service.gradient }}
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
