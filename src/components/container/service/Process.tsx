/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import One from "public/images/service/workProcess.png";

const ProcessTwo = () => {
  return (
    <div className="work-process bg-black p-4 p-lg-0">
      <div className="row">
        <div
          className="col-lg-6"
          style={{ marginTop: "75px", display: "flex", alignItems: "center" }}
        >
          <div className="work-process-thumb">
            <Image src={One} alt="img" />
            <div className="quote-wrap">
              <h4>Quality, Trust, and Expertise</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-5 align-self-center">
          <div className="section-title style-white mb-0 pd-top-100 pd-bottom-100">
            <h6 className="sub-title">// Our Process</h6>
            <h2 className="title">Our Work Process</h2>
            <div className="media single-list-media style-2 mt-4">
              <div
                className="media-left"
                style={{ borderRadius: "50%", backgroundColor: "#FA6400" }}
              >
                01
              </div>
              <div className="media-body align-self-center">
                <h4>Discovery & Planning</h4>
                <p>
                  Define project goals, gather requirements, and develop
                  tailored strategies.
                </p>
              </div>
            </div>
            <div className="media single-list-media style-2 mt-4">
              <div
                className="media-left"
                style={{ borderRadius: "50%", backgroundColor: "#FA6400" }}
              >
                02
              </div>
              <div className="media-body align-self-center">
                <h4>Execution & Implementation</h4>
                <p>
                  Implement digital marketing, IT outsourcing, and data
                  analytics solutions, while monitoring and addressing
                  performance issues promptly.
                </p>
              </div>
            </div>
            <div className="media single-list-media style-2 mt-4">
              <div
                className="media-left"
                style={{ borderRadius: "50%", backgroundColor: "#FA6400" }}
              >
                03
              </div>
              <div className="media-body align-self-center">
                <h4>Monitoring & Optimization</h4>
                <p>
                  Continuously monitor campaign performance, IT systems, and
                  data analytics to optimize strategies based on real-time
                  insights.
                </p>
              </div>
            </div>

            <div className="media single-list-media style-2 mt-4">
              <div
                className="media-left"
                style={{ borderRadius: "50%", backgroundColor: "#FA6400" }}
              >
                04
              </div>
              <div className="media-body align-self-center">
                <h4>Reporting & Collaboration</h4>

                <p>
                  Generate regular reports showcasing progress and insights,
                  collaborate with clients, incorporate feedback, and drive
                  continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTwo;
