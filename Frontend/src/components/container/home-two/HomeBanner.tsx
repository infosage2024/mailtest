import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";


const HomeThreeBanner = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <section style={{width:"100%"}}>
        <div style={{width:"100%"}}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            speed={1000}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <div
                className="banner-three__slider-single"
                style={{
                  backgroundImage: "url('/images/bg/itAug.png')",
                  height:"700px",
                }}
              >
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-3">

                      <div className="banner-three__content">
                        <h1 className="light-title" style={{marginTop:"25%",color:"white",fontSize:"3.5rem"}}>
                          IT Services for Your Business
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="banner-three__slider-single"
                style={{
                  backgroundImage:
                    "url('/images/bg/digital.png')",height:"700px"
                }}
              >
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-3">

                      <div className="banner-three__content">
                        <h1 className="light-title" style={{marginTop:"25%",color:"white",fontSize:"3.5rem"}}>
                          IT Services for Your Business
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="banner-three__slider-single"
                style={{
                  backgroundImage:
                    "url('/images/bg/dataAnalytics.png')",height:"700px"
                }}
              >
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-3">
                      <div className="banner-three__content">
                        <h1 className="light-title" style={{color:"white",marginTop:"25%",fontSize:"3.5rem"}}>
                          IT Services for Your Business
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomeThreeBanner;
