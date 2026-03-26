import React from 'react'
import Companies from "../components/Companies/Companies";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import CompanyProfile from "../components/CompanyProfile/CompanyProfile";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import PropertyManagementServices from "../components/PropertyManagementServices/PropertyManagementServices";

const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>
    <PropertyManagementServices />
    <WhyChooseUs />
    <CompanyProfile />
    <Companies />
    <Residencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
  </div>
  )
}

export default Website