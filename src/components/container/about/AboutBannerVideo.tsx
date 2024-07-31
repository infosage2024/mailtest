import React, { useState } from "react";
import Image from "next/image";

import One from "public/images/bg/shape1.png";
import { MdOutlineClose } from "react-icons/md";
import YoutubeEmbed from "../youtube/YoutubeEmbed";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { url } from "inspector";

const AboutBannerVideo = () => {
  const [videoActive, setVideoActive] = useState(false);
  const url = "/images/expertise/it.png";

  return (
    <div>
      <div
        className="container"
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <div className="banner-video-area banner-video-area-2">
          <div
            style={{
              width: "100%",
              height: "700px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              className="video-play-btn my-cus-btn"
              aria-label="open video modal"
              onClick={() => setVideoActive(true)}
            >
              <i className="fa fa-play"></i>
            </button>
          </div>
          <div className="banner-content-area">
            <p>From</p>
            <h2>1990</h2>
          </div>
        </div>
      </div>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="RvreULjnzFo" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <MdOutlineClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBannerVideo;
