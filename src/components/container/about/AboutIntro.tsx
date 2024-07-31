import React from "react";
import Image from "next/image";
import One from "public/images/icon/1.png";
import Two from "public/images/icon/2.png";
import Three from "public/images/icon/3.png";
const AboutIntro = () => {
  return (
    <div className="intro-area bg-light pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner border-right-1 ps-lg-3">
              <div className="thumb mb-4">
                <Image src={One} alt="img" />
              </div>
              <div className="details">
                <h4>Empower Your Operations</h4>
                <p>
                  Outsourcing enables businesses to focus on core competencies
                  while benefiting from specialized expertise and cost-effective
                  solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner border-right-1 ps-lg-3 pe-lg-3">
              <div className="thumb mb-4">
                <Image src={Two} alt="img" />
              </div>
              <div className="details">
                <h4>Strategic Growth through Data Transformation</h4>
                <p>
                  Unlocking your potential through strategic foresight and
                  sustainable growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner ps-lg-3">
              <div className="thumb mb-4">
                <Image src={Three} alt="img" />
              </div>
              <div className="details">
                <h4>Empowering Insights Through Digital Analytics.</h4>
                <p>
                  Empowering insights through digital analytics, transforming
                  raw data into strategic assets for informed decision-making
                  and business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
