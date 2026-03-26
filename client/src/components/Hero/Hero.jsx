import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Professional <br />
              Property Management
              <br /> Made Easy
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Whether you're an owner seeking peace of mind or a tenant looking for the perfect home,</span>
            <span>Defining Management delivers unparalleled service and trust.</span>
          </div>

          {/* <SearchBar/> */}

          {/* Stats removed as requested */}
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="hero-slider-container"
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={50}
              slidesPerView={1}
              className="hero-swiper"
            >
              <SwiperSlide>
                <div className="image-container">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" alt="Beautiful house exterior" />
                </div>
              </SwiperSlide>
              {/* Add more SwiperSlides here as needed */}
              <SwiperSlide>
                <div className="image-container">
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Modern interior design" />
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
