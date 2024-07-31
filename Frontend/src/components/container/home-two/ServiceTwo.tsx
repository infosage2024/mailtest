/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import digital from "public/images/service/digital.png";
import two from "public/images/service/2.png";
import three from "public/images/service/3.png";
import four from "public/images/service/4.png";
import five from "public/images/service/5.png";
import six from "public/images/service/6.png";
import itAug from "public/images/service/itAugm.png";
import analytics from "public/images/service/DataAnaltyics.png";
import sem from "public/images/service/sem.png";
const ServiceTwo = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <>
      <div className="service-area bg-black pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-8">
              <div className="tab-content" id="myTabContent">
                <div
                  className={`tab-pane fade${
                    imgTab === 0 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="single-service-inner-2">
                    <Image
                      className="top_image_bounce animate-img-1"
                      src={three}
                      alt="img"
                    />
                    <Image
                      className="top_image_bounce animate-img-2"
                      src={two}
                      alt="img"
                    />
                    <div className="thumb">
                      <Image src={itAug} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        {/* <h2>01.</h2> */}
                        <p>
                          Enhance your team{"'"}s capabilities with our flexible
                          IT outsourcing solutions, ensuring optimal performance
                          and cost-effectiveness.{" "}
                        </p>
                        <Link href="/service" style={{ fontSize: "1.25rem" }}>
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${
                    imgTab === 1 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="single-service-inner-2">
                    <Image
                      className="top_image_bounce animate-img-1"
                      src={two}
                      alt="img"
                    />
                    <Image
                      className="top_image_bounce animate-img-2"
                      src={three}
                      alt="img"
                    />
                    <div className="thumb">
                      <Image src={digital} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        {/* <h2>02.</h2> */}
                        <p>
                          Transform your business and operations with our
                          Digital transformation solutions, ensuring a strong
                          online presence, enhanced customer engagement, and
                          market relevance.{" "}
                        </p>
                        <Link href="/service" style={{ fontSize: "1.25rem" }}>
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${
                    imgTab === 2 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="single-service-inner-2">
                    <Image
                      className="top_image_bounce animate-img-1"
                      src={two}
                      alt="img"
                    />
                    <Image
                      className="top_image_bounce animate-img-2"
                      src={three}
                      alt="img"
                    />
                    <div className="thumb">
                      <Image src={analytics} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        {/* <h2>03.</h2> */}
                        <p>
                          Harness the power of data with our advanced analytics
                          solutions, providing valuable insights for informed
                          decision-making and competitive advantage{" "}
                        </p>
                        <Link href="/service" style={{ fontSize: "1.25rem" }}>
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${
                    imgTab === 3 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="single-service-inner-2">
                    <Image
                      className="top_image_bounce animate-img-1"
                      src={two}
                      alt="img"
                    />
                    <Image
                      className="top_image_bounce animate-img-2"
                      src={three}
                      alt="img"
                    />
                    <div className="thumb">
                      <Image src={sem} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        {/* <h2>04.</h2> */}
                        <p>
                          Unlock the full potential of your enterprise with our
                          strategic business solutions, optimizing efficiency
                          and driving sustainable growth.{" "}
                        </p>
                        <Link href="/service" style={{ fontSize: "1.25rem" }}>
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div
                  className={`tab-pane fade${
                    imgTab === 4 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="single-service-inner-2">
                    <Image
                      className="top_image_bounce animate-img-1"
                      src={two}
                      alt="img"
                    />
                    <Image
                      className="top_image_bounce animate-img-2"
                      src={three}
                      alt="img"
                    />
                    <div className="thumb">
                      <Image src={four} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <h2>05.</h2>
                        <p>
                          Duis aute irure dolor reprehenderit in voluptate velit
                          esse cillum dolore fugiat nulla pariatur. Excepteur
                          sint occaecat cupidatat{" "}
                        </p>
                        <Link href="/service">Discover More</Link>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 offset-lg-2 align-self-center">
              <div className="section-title style-white mb-0 mt-4 mt-lg-0">
                <h6 className="sub-title">// OUR SERVICES</h6>
                <h2 className="title" style={{ fontSize: "1.5rem" }}>
                  Elevate your business with our comprehensive IT consulting,
                  staffing and digital transformation solutions.
                </h2>
              </div>
              <ul
                className="service-tab-inner nav nav-tabs mt-lg-5 mt-4"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={(imgTab == 0 ? " active" : " ") + " nav-link"}
                    onClick={() => setImgTab(0)}
                  >
                    IT AUGUMENTATION
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={(imgTab == 1 ? " active" : " ") + " nav-link"}
                    onClick={() => setImgTab(1)}
                  >
                    DIGITAL TRANSFORMATION
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={(imgTab == 2 ? " active" : " ") + " nav-link"}
                    onClick={() => setImgTab(2)}
                  >
                    DATA ANALYTICS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={(imgTab == 3 ? " active" : " ") + " nav-link"}
                    onClick={() => setImgTab(3)}
                  >
                    STRATEGIC PLANNING
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-wrap bg-sky text-center">
        <Link
          className="btn btn-base border-radius mt--30 left_image_bounce"
          href="/service"
        >
          View All Services
        </Link>
      </div>
    </>
  );
};

export default ServiceTwo;
