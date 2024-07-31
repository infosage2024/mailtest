/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import Image from "next/image";
import Link from "next/link";

import One from "public/images/about/4.png";
import Two from "public/images/service-icon/1.png";
import Three from "public/images/service-icon/2.png";
import Four from "public/images/service-icon/3.png";
import Five from "public/images/service-icon/4.png";
import Six from "public/images/service-icon/5.png";

const ServiceArea = () => {
  return (
    <div
      id="service-area"
      className="service-area bg-sky pd-top-110 bg-relative"
    >
      <Image
        className="left_image_bounce position-top-right"
        src={One}
        alt="img"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h5 className="sub-title">// OUR SERVICES</h5>
              {/* <h2 className="title"></h2> */}
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Insurance Tax</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
                <Link className="case-view-btn" href="/case-study-details">
                  <span>View Details</span> +
                </Link>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Three} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="/service-details">Financial Planning</Link>
                </h4>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and Link search for
                  &apos;lorem ipsum&apos; will{" "}
                </p>
                <Link className="case-view-btn" href="/case-study-details">
                  <span>View Details</span> +
                </Link>
              </div>
            </div>
          </div> */}

          <div className="col-lg-3 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Five} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="#">IT Outsourcing</Link>
                </h4>
                <p>
                  Focus on what you do best while we handle your IT operations.
                  Our dedicated team becomes an extension of your workforce,
                  ensuring optimal efficiency.
                </p>
                {/* <Link className="case-view-btn" href="/blogs/it-aug-details">
                  <span>View Details</span> +
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Four} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="#">
                    Digital Transformation: Hospitals | Clinics | Doctors
                  </Link>
                </h4>
                <p>
                  Leverage our expertise to create a comprehensive digital
                  transformation roadmap that propels your business towards
                  excellence.
                </p>
                {/* <Link className="case-view-btn" href="/blogs/digital-marketing">
                  <span>View Details</span> +
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Six} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="#">Digital Marketing : Pharmacueticals</Link>
                </h4>
                <p>
                  Elevate your pharmaceutical brand with our digital marketing
                  strategies. We specialize in creating targeted campaigns that
                  comply with regulations, driving brand awareness and patient
                  engagement.
                </p>
                {/* <Link className="case-view-btn" href="/blogs/digital-marketing">
                  <span>View Details</span> +
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-service-inner">
              <div className="thumb">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <Link href="#">Data Analytics and Insights</Link>
                </h4>
                <p>
                  Turn data into actionable insights. Our analytics solutions
                  help you make informed decisions and stay ahead of the
                  competition.
                </p>
                {/* <Link className="case-view-btn" href="/blogs/data-analytics">
                  <span>View Details</span> +
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
