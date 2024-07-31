import React from "react";

import Image from "next/image";

import Link from "next/link";

import one from "public/images/insights/staffing.png";
//icon/13.svg";
import two from "public/images/insights/hospitals.png";
//icon/14.svg";
import three from "public/images/insights/wellness.png";
//icon/15.svg";
import four from "public/images/insights/data.png";
//icon/16.svg";

import five from "public/images/icon/17.svg";

const Tax = () => {
  return (
    <div className="intro-area pd-top-90 mt-md-4">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <div className="intro-area-inner">
              <div className="thumb mb-4">
                <Image src={one} alt="Image" />
              </div>
              <div className="details">
                <h4 style={{ color: "#2B4D8F" }}>Global IT Staffing</h4>
                <p>
                  Discover how our IT outsourcing services can enhance your
                  team's capabilities, ensuring seamless operations and optimal
                  performance.
                </p>
                <Link className="read-more-text" href="/blogs/it-staffing">
                  <span className="hide-text">Know More</span>{" "}
                  <Image src={five} alt="Image" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <div className="intro-area-inner">
              <div className="thumb mb-4">
                <Image src={two} alt="Image" />
              </div>
              <div className="details">
                <h4 style={{ color: "#2B4D8F" }}>
                  {" "}
                  Hospitals | Clinics | Doctors
                </h4>
                <p>
                  Transform your brand and operations with our digital marketing
                  services, ensuring a strong online presence, enhanced customer
                  engagement, and market relevance.
                </p>
                <Link className="read-more-text" href="/blogs/it-marketing">
                  <span className="hide-text">Know More</span>{" "}
                  <Image src={five} alt="Image" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="intro-area-inner">
              <div className="thumb mb-4">
                <Image src={three} alt="Image" />
              </div>
              <div className="details">
                <h4 style={{ color: "#2B4D8F" }}>
                  {" "}
                  Pharmaceuticals | Wellness Products
                </h4>
                <p>
                  Leverage our expertise to create a comprehensive healthcare
                  marketing roadmap that propels your business towards
                  excellence.
                </p>
                <Link className="read-more-text" href="/blogs/it-pharma">
                  <span className="hide-text">Know More</span>{" "}
                  <Image src={five} alt="Image" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="intro-area-inner">
              <div className="thumb mb-4">
                <Image src={four} alt="Image" />
              </div>
              <div className="details">
                <h4 style={{ color: "#2B4D8F" }}>Data Driven Dashboards</h4>
                <p>
                  Harness the power of data with our advanced analytics
                  solutions, providing valuable insights for informed
                  decision-making and competitive advantage.
                </p>
                <Link
                  className="read-more-text"
                  href="/service/blogs/it-analytics"
                >
                  <span className="hide-text">Know More </span>{" "}
                  <Image src={five} alt="Image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;
