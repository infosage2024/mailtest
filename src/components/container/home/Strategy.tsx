import React from "react";
import Image from "next/image";
import Link from "next/link";
import twentyOne from "public/images/about/health.png";
import twentyTwo from "public/images/about/it.png";
import Eight from "public/images/right-up2.png";

const Strategy = () => {
  return (
    <div className="planning-area bg-sky pd-top-90 pd-bottom-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title mb-0 mt-5 mt-lg-0">
              <h6
                className="sub-title "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                What we do
              </h6>
              <h6
                className="title mb-4 "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="150"
                style={{ fontSize: "1.75rem" }}
              >
                We are committed to delivering unparalleled strategies tailored
                to your unique needs for maximum impact and success.
              </h6>
              <p
                className="content "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                Harness our expertise in healthcare marketing to craft a
                comprehensive roadmap that propels your business toward
                excellence and success in the industry. Benefit from our
                specialized knowledge to achieve your marketing goals
                effectively and efficiently.
              </p>
              {/* <ul
                className="single-list-inner ps-3 mt-4 mb-4 "
                data-aos="fade-up"
                data-aos-duration="1500"
                data-ao-delay="250s"
              >
                <li>
                  <strong>692%</strong> Campaign ROI Exceeds
                </li>
                <li>
                  <strong>8x</strong> the number of keywords sending traffic to
                  your site
                </li>
                <li>
                  <strong>296%</strong> increase in organic traffic
                </li>
              </ul> */}
              <Image
                className=""
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
                src={twentyOne}
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-9 mt-4 mt-lg-0 align-self-center">
            <div
              className="about-thumb-area pe-0 pb-0 px-lg-5 ms-xl-5 "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="left-content" style={{ fontSize: "1.25rem" }}>
                connect@infosagesolutions.com
              </div>
              <Image
                className=""
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
                src={twentyTwo}
                alt="img"
              />
              <p className="mt-3">
                With a focus on IT outsourcing, digital transformation, and data
                analytics, we craft bespoke strategies to propel your business
                forward. Leveraging cutting-edge technologies and deep industry
                insights, we ensure maximum impact and success for your digital
                endeavors. Partner with us to unlock new opportunities and
                navigate the evolving business landscape with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="btn-wrap text-center mt--175">
        <Link className="blog-page-btn left_image_bounce" href="/service">
          <Image src={Eight} alt="img" />
        </Link>
      </div> */}
    </div>
  );
};

export default Strategy;
