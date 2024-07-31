import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import market from "/public/images/insights/market.png";
import market3 from "/public/images/insights/market3.png";
import market1 from "/public/images/insights/market1.png";

const Market = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            Digital Transformation: Changing the Game for Doctors, Hospitals,
            Clinics, Pharmaceuticals and Wellness brands
          </h3>
          <div className="col-lg-7" style={{ fontSize: "1.2rem" }}>
            <div>
              <p>
                In rapidly evolving digital landscape, the concept of digital
                transformation has become more than just a buzzword. It has
                emerged as a transformative force reshaping industries
                worldwide, and the healthcare sector is no exception. From
                doctors and hospitals to clinics, pharmaceuticals, and wellness
                brands, the impact of digital transformation is profound and
                far-reaching.
              </p>
            </div>
            <div>
              <p>
                Digital transformation refers to the integration of digital
                technology into all aspects of a business, fundamentally
                changing how it operates and delivers value to customers. In the
                context of healthcare, this entails leveraging digital tools and
                technologies to improve patient care, streamline operations, and
                enhance overall efficiency.
              </p>
            </div>
          </div>
          <div
            className="col-lg-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src={market} alt="Outsourcing" />
          </div>
        </div>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-lg-6">
            {/* <h4>
              Proven Strategies to Recruit and Build a High-Performing IT Team
            </h4> */}

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={market1} alt="challanges" />
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{
              fontSize: "1.2rem",
              marginTop: "20px",
            }}
          >
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              Navigating the Evolution: Addressing Challenges in Digital
              Transformation Initiatives
            </h4>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ul>
                <li>
                  Safeguarding sensitive patient information from cyber threats
                  and ensuring compliance with regulatory standards such as
                  HIPAA.
                </li>
                <li>
                  Overcoming reluctance among healthcare professionals and
                  patients to adopt new digital technologies and workflows.
                </li>
                <li>
                  Navigating complex healthcare regulations and standards to
                  ensure that digital solutions meet legal requirements.
                </li>
                <li>
                  Balancing the upfront investment required for digital
                  transformation with the long-term benefits and returns on
                  investment.
                </li>
                <li>
                  Addressing the need for continuous training and development to
                  equip healthcare professionals with the skills necessary for
                  digital transformation.
                </li>
                <li>
                  Ensuring seamless integration and communication between
                  different digital systems and platforms used in healthcare
                  settings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-lg-6">
            <h4>The role of Digital Marketing in modren world</h4>
            <ul>
              <li>
                Helps businesses reach a wider audience and increase their
                online presence, which can lead to more visibility and brand
                recognition.
              </li>
              <li>
                Can be more cost-effective than traditional marketing methods,
                such as print or television advertising, as it allows businesses
                to target specific audiences and track their return on
                investment.
              </li>
              <li>
                Allows businesses to target specific demographics, interests,
                and behaviors, which can lead to higher conversion rates and a
                better return on investment.
              </li>
              <li>
                Provides measurable results, allowing businesses to track their
                progress and adjust their strategies accordingly.
              </li>
              <li>
                Allows businesses to quickly adjust their strategies and adapt
                to changing market conditions.
              </li>
              <li>
                Can increase customer engagement through social media, content
                marketing, and other tactics, leading to higher brand loyalty
                and customer retention.
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src={market3} alt="role"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
