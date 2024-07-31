import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import outsource from "/public/images/insights/outsourcing.png";
import challange from "/public/images/insights/itChallanges.png";
import solution from "/public/images/insights/solution.png";
import Link from "next/link";

import BannerOne from "@/components/container/home/BannerOne";
import BannerVideo from "@/components/container/home/BannerVideo";
import Tax from "@/components/container/home/Tax";
import AboutUsOne from "@/components/container/home/AboutUsOne";
import Marqueue from "@/components/container/home/Marqueue";
import Strategy from "@/components/container/home/Strategy";
import Case from "@/components/container/home/Case";
import Team from "@/components/container/home/Team";
import Testimonial from "@/components/container/home/Testimonial";
import Blog from "@/components/container/home/Blog";
import ContactInstagram from "@/components/container/contact/ContactInstagram";
import ContactClientThree from "@/components/container/contact/ContactClientThree";
import OutSource from "@/components/container/insights/outsource";
import Market from "@/components/container/insights/market";
import DataAnalytics from "@/components/container/insights/analytics-data";

const Insights = () => {
  const scrollToParagraph = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout
      meta="Infosage Solutions"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <Case />
      <div
        className="container"
        style={{
          marginTop: "60px",
        }}
      >
        <div className="row">
          <div
            className="col-lg-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p
              className="btn btn-base"
              onClick={() => scrollToParagraph("paragraph1")}
              style={{ width: "200px" }}
            >
              Out Sourcing
            </p>
          </div>
          <div
            className="col-lg-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p
              className="btn btn-base"
              onClick={() => scrollToParagraph("paragraph2")}
              style={{ width: "250px" }}
            >
              Digital Transformation
            </p>
          </div>
          <div
            className="col-lg-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p
              className="btn btn-base"
              onClick={() => scrollToParagraph("paragraph3")}
              style={{ width: "200px" }}
            >
              Data Analytics
            </p>
          </div>
        </div>
      </div>
      {/* <BannerOne /> */}
      {/* <BannerVideo /> */}
      {/* <Tax /> */}
      {/* <AboutUsOne /> */}
      {/* <Marqueue /> */}
      {/* <Strategy /> */}
      {/* <Team /> */}
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      {/* <ContactClientThree /> */}
      {/* <ContactInstagram /> */}
      <div id="paragraph1">
        <OutSource />
      </div>
      <div id="paragraph2">
        <Market />
      </div>
      <div id="paragraph3">
        <DataAnalytics />
      </div>
    </Layout>
  );
};

export default Insights;
