import Layout from "@/components/layout/Layout";
import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import YoutubeEmbed from "@/components/container/youtube/YoutubeEmbed";
import ItExpertise from "@/components/container/expertise-details/it-expertise";
import ItMarketing from "@/components/container/expertise-details/marketing";
const ItMarketings = () => {
  const [videoActive, setVideoActive] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  let url;
  if (screenWidth > 720) {
    url = "/images/expertise/health.png";
  } else {
    url = "/images/expertise/healthmobi.png";
  }
  return (
    <Layout
      meta="Infosage Solutions"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <div>
        <div
          className="container"
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="banner-video-area banner-video-area-2">
            <div
              style={{
                width: "100%",
                height: "600px",
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
              <h2 style={{ fontSize: "1.25rem" }}>
                Our Expertise in Comprehensive Digital Marketing Solutions
              </h2>
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
              {videoActive && <YoutubeEmbed embedId="pD8tNBkEx5k" />}
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
      <ItMarketing />
    </Layout>
  );
};
export default ItMarketings;
