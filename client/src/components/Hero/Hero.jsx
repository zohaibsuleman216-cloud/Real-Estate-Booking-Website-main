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

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
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
                  <img src="./hero-image.png" alt="houses" />
                </div>
              </SwiperSlide>
              {/* Add more SwiperSlides here as needed */}
              <SwiperSlide>
                <div className="image-container">
                  <img src="./hero-image.png" alt="houses 2" />
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
