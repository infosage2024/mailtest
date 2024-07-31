/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";

import One from "public/images/about/1.png";
import Two from "public/images/about/2.png";
import Three from "public/images/about/3.png";
import Four from "public/images/about/4.png";
import Five from "public/images/about/11.png";
import about1 from "public/images/about/about1.png";
import about2 from "public/images/about/about2.png";
import Link from "next/link";

const AboutTwo = () => {
  return (
    <div id="about-area" className="about-area pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-9 "
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="about-thumb-area cussi-about-thumber">
              <Image className="about-img-1" src={about1} alt="img" />
              <Image className="about-img-2 cus-img-2" src={about2} alt="img" />
              <Image
                className="about-img-3 top_image_bounce"
                src={Three}
                alt="img"
              />
              <Image
                className="about-img-4 top_image_bounce"
                src={Four}
                alt="img"
              />
              <div className="exp-wrap">
                <div
                  className="exp-inner"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {/* <h2>25 +</h2> */}
                  {/* <p
                    style={{
                      fontWeight: "bolder",
                      fontSize: "1rem",
                      marginLeft: "-45px",
                      marginTop: "10px",
                    }}
                  >
                    IT
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      fontSize: "1rem",
                      marginLeft: "13px",
                    }}
                  >
                    STAFFING
                  </p>
                  <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>
                    DIGITAL
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      fontSize: "1rem",
                      marginLeft: "-19px",
                    }}
                  >
                    DATA
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 align-self-center "
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="section-title mb-0 mt-5 mt-lg-0">
              <h6
                className="sub-title"
                style={{ fontWeight: "bolder", fontSize: "2.1rem" }}
              >
                // ABOUT US
              </h6>
              <h2 className="title" style={{ fontSize: "1.5rem" }}>
                Empowering businesses with innovative IT solutions, strategic
                staffing, and targeted digital strategies in a dynamic landscape
              </h2>
              <p className="content" style={{ color: "black" }}>
                We provide IT consulting and digital transformation services to
                help businesses grow. We offer tailored solutions, from
                strategic planning to implementation, using cutting-edge
                technologies and innovative strategies. Trust us to deliver
                high-quality solutions. Contact us today to unlock the full
                potential of technology for your organization.
              </p>
              <p className="quote mt-4 pb-2" style={{ color: "black" }}>
                &quot; Elevate your business with our comprehensive IT
                consulting and digital transformation services. Partner with us
                to unlock boundless possibilities.&quot;
              </p>
              <div className="row">
                <div className="col-md-4 mt-3">
                  <h5>
                    <Image className="me-2" src={Five} alt="img" /> EXPERTISE
                  </h5>
                </div>
                <div className="col-md-4 mt-3">
                  <h5>
                    <Image className="me-2" src={Five} alt="img" /> INNOVATION
                  </h5>
                </div>
                <div className="col-md-4 mt-3">
                  <h5>
                    <Image className="me-2" src={Five} alt="img" /> INTEGRATE
                  </h5>
                </div>
                {/* <div className="col-md-6 mt-3">
                  <h5>
                    <Image className="me-2" src={Five} alt="img" /> OUTSOURCE
                  </h5>
                </div> */}
              </div>
              <div className="btn-wrap">
                <Link className="btn btn-base border-radius" href="/about">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
