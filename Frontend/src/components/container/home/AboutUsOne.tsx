import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import one from "public/images/about/aboutUs.png";
import two from "public/images/about/18.png";
import three from "public/images/about/19.png";
import four from "public/images/about/20.png";

import { MdOutlineClose } from "react-icons/md";
import YoutubeEmbed from "../youtube/YoutubeEmbed";

const AboutUsOne = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <>
      <div
        id="about-area"
        className="about-area pd-top-90"
        style={{ marginBottom: "150px" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-9 "
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="about-thumb-area pe-0 pb-0">
                <Image className="about-img-1 mb-3" src={one} alt="img" />
                {/* <Image className="about-img-1" src={two} alt="img" /> */}
                {/* <button
                  className="video-play-btn-inner"
                  onClick={() => setVideoActive(true)}
                >
                  <Image
                    className="about-img-video rotation_image"
                    src={four}
                    alt="img"
                  />
                </button> */}
                {/* <div
                  className={
                    (videoActive ? " video-zoom-in" : " ") + " video-backdrop"
                  }
                  onClick={() => setVideoActive(false)}
                >
                  <div className="video-inner">
                    <div
                      className="video-container"
                      onClick={(e: any) => e.stopPropagation()}
                    >
                      {videoActive && <YoutubeEmbed embedId="v1W94aUmeGo" />}
                      <button
                        aria-label="close video popup"
                        className="close-video-popup"
                        onClick={() => setVideoActive(false)}
                      >
                        <MdOutlineClose />
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              className="col-lg-6 align-self-center "
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="section-title mb-0 mt-5 mt-lg-0">
                <h6 className="sub-title">Who We Are</h6>
                <h2 className="title mb-4" style={{ fontSize: "1.5rem" }}>
                  We are dedicated to helping businesses thrive by partnering
                  with experts in IT, digital innovation, and data analytics for
                  success.
                </h2>
                {/* <Image src={three} alt="img" /> */}
                <p className="content">
                  Infosage Solutions is a rapidly emerging firm specializing in
                  digital marketing, data analytics, and IT outsourcing
                  services. Our dedicated experts bring a wealth of experience
                  and a passion for excellence in these critical domains. We are
                  committed to helping businesses soar by leveraging innovative
                  strategies and cutting-edge technologies across multiple
                  facets of operations. With Infosage Solutions, you can trust
                  that your investment is in capable hands, dedicated to
                  propelling your company to new heights of success across
                  digital marketing, data analytics, and IT outsourcing realms.
                  Join us on this exciting journey as we redefine business
                  solutions and unlock endless possibilities for your business
                  growth.
                </p>
                <p className="content">
                  At Infosage Solutions, our journey is defined by a commitment
                  to excellence in IT consulting and digital transformation.
                  Established with a vision to help businesses grow, we have
                  evolved into a trusted partner for organizations seeking IT
                  excellence.{/* &quot; */}
                </p>
                <p className="content">
                  Elevate your business with our comprehensive IT consulting and
                  digital transformation services. Our mission is to craft
                  tailored solutions that drive growth, fueled by innovation,
                  technology, and strategic expertise.
                </p>

                {/* <div className="btn-wrap">
                  <Link className="btn btn-border-base" href="/about">
                    More About us
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsOne;
