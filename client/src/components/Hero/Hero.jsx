import "./Hero.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css/effect-fade";

const banners = [
  {
    title: (
      <>
        Professional <br />
        Property Management
        <br /> Made Easy
      </>
    ),
    description: (
      <>
        <span>Whether you're an owner seeking peace of mind or a tenant looking for the perfect home,</span>
        <span>Defining Management delivers unparalleled service and trust.</span>
      </>
    ),
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    alt: "Beautiful house exterior"
  },
  {
    title: (
      <>
        Maximize Your <br />
        Rental Income
        <br /> With Us
      </>
    ),
    description: (
      <>
        <span>Discover smarter property solutions with our cutting-edge technology and expert management,</span>
        <span>ensuring maximum ROI for your investments.</span>
      </>
    ),
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    alt: "Modern interior design"
  }
];

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        className="hero-main-swiper"
        style={{ width: "100%" }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="paddings innerWidth flexCenter hero-container">
              {/* left side */}
              <div className="flexColStart hero-left">
                <div className="hero-title">
                  <div className="orange-circle" />
                  <motion.h1
                    initial={{ y: "2rem", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 2,
                      type: "ease-in",
                    }}
                    viewport={{ once: true }}
                  >
                    {banner.title}
                  </motion.h1>
                </div>
                <div className="flexColStart secondaryText flexhero-des">
                  {banner.description}
                </div>
              </div>

              {/* right side */}
              <div className="flexCenter hero-right">
                <motion.div
                  initial={{ x: "7rem", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 2,
                    type: "ease-in",
                  }}
                  viewport={{ once: true }}
                  className="hero-slider-container"
                >
                  <div className="image-container">
                    <img src={banner.image} alt={banner.alt} />
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
