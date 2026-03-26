import React from "react";
import "./WhyChooseUs.css";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

const features = [
  {
    title: "Tech-Driven Approach",
    desc: "We leverage modern platforms like TurboTenant and Zoho to streamline lead handling and workflows."
  },
  {
    title: "Transparent Communication",
    desc: "Centralized channels ensure property owners and tenants stay informed seamlessly."
  },
  {
    title: "Documented Protocols",
    desc: "Strict internal compliance guarantees responsive coordination and handling at every stage."
  },
  {
    title: "Proactive Management",
    desc: "We minimize vacancy periods and maximize your returns with swift, efficient service."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="wcu-wrapper" id="why-choose-us">
      <div className="paddings innerWidth flexCenter wcu-container">
        {/* left side */}
        <div className="v-left">
          <motion.div 
            className="wcu-image-container image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Reusing existing value image or an appropriate placeholder */}
            <img src="./value.png" alt="Why Choose Us" />
            
            <div className="wcu-overlay-badge">
              <span className="badge-number">10+</span>
              <span className="badge-text">Years of<br/>Excellence</span>
            </div>
          </motion.div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right wcu-right">
          <span className="orangeText">Why Choose Us</span>
          <span className="primaryText">A Modern Standard of Excellence</span>
          <span className="secondaryText">
            Founded on principles of transparency, efficiency, and accountability, we bring a tech-driven approach to real estate management that benefits both owners and tenants.
          </span>

          <div className="wcu-features">
            {features.map((item, index) => (
              <motion.div 
                className="wcu-feature-item" 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="wcu-icon">
                  <MdCheckCircle size={28} color="var(--blue)" />
                </div>
                <div className="wcu-feature-text">
                  <span className="wcu-feature-title">{item.title}</span>
                  <span className="wcu-feature-desc">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.button 
            className="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: "2rem" }}
          >
            Discover More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
