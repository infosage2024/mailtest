/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/about/4.png";
import Two from "public/images/about/5.png";
import Three from "public/images/about/7.png";

import it from "/public/images/blog/it.png";
import digital from "/public/images/blog/digital.png";
import data from "/public/images/blog/data.png";

import Five from "public/images/right-up.png";
import Eight from "public/images/right-up2.png";

const LatestArticle = () => {
  return (
    <>
      <div className="blog-area bg-relative bg-sky pd-top-115 pd-bottom-120">
        <Image
          className="top_image_bounce position-top-right"
          src={One}
          alt="img"
        />
        <Image
          className="top_image_bounce position-bottom-right"
          src={Two}
          alt="img"
        />
        <Image
          className="left_image_bounce position-bottom-left"
          src={Three}
          alt="img"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                {/* <h6 className="sub-title">// Latest Articles</h6> */}
                <h2 className="title">Industry | Insights</h2>
                <p
                  className="content mb-4"
                  style={{ fontSize: "1.5rem", color: "#1f508a" }}
                >
                  Staying Ahead of the Curve: Insights from Industry Experts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="details">
                  <div className="cat-wrap">
                    <Link href="/insights" style={{ marginTop: "10px" }}>
                      IT Staffing
                    </Link>
                    <Link href="/insights" style={{ marginTop: "10px" }}>
                      IT augumentation
                    </Link>
                    <Link href="/insights" style={{ marginTop: "10px" }}>
                      IT Out Sourcing
                    </Link>
                  </div>
                  <h4>
                    <Link href="/insights">
                      Revolutionize Your IT Staffing With Right Fit
                    </Link>
                  </h4>
                  {/* <p className="date">January 19, 2023 . 02 Comments</p> */}
                </div>
                <div className="thumb">
                  <Image src={it} alt="img" />
                </div>
                <Link className="read-more" href="/insights">
                  Read More <Image src={Five} alt="img" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="details">
                  <div className="cat-wrap">
                    <Link href="/insights" style={{ marginTop: "10px" }}>
                      Health Care
                    </Link>
                    <Link href="/insights" style={{ marginTop: "10px" }}>
                      Marketing
                    </Link>
                    <Link href="/insights" style={{ marginTop: "10px" }}>
                      Transformation
                    </Link>
                  </div>
                  <h4>
                    <Link href="/insights">
                      Digital Transformation
                      <br />
                      Healthcare / Pharmaceuticals
                    </Link>
                  </h4>
                  {/* <p className="date">January 19, 2023 . 02 Comments</p> */}
                </div>
                <div className="thumb">
                  <Image src={digital} alt="img" />
                </div>
                <Link className="read-more" href="/insights">
                  Read More <Image src={Five} alt="img" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="details">
                  <div className="cat-wrap">
                    <Link href="/insights" style={{ marginTop: "10px" }}>
                      Data
                    </Link>
                    <Link href="/insights" style={{ marginTop: "10px" }}>
                      Analytics
                    </Link>
                    <Link href="/insights" style={{ marginTop: "10px" }}>
                      Data Transformation
                    </Link>
                  </div>
                  <h4>
                    <Link href="/insights">
                      Transforming Data into Actionable Intelligence
                    </Link>
                  </h4>
                  {/* <p className="date">January 19, 2023 . 02 Comments</p> */}
                </div>
                <div className="thumb">
                  <Image src={data} alt="img" />
                </div>
                <Link className="read-more" href="/insights">
                  Read More <Image src={Five} alt="img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-wrap text-center mt--50">
        <Link className="blog-page-btn left_image_bounce" href="/insights">
          <Image src={Eight} alt="img" />
        </Link>
      </div>
    </>
  );
};

export default LatestArticle;
