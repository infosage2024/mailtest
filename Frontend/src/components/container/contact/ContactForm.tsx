/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/about/4.png";
import Two from "public/images/icon/8.png";
import Three from "public/images/icon/9.png";
import Four from "public/images/icon/10.png";
import hiring from "public/images/contact/hiring.png";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function contactSubmit() {
    window.alert("Contact details submitted successfully.");
  }
  return (
    <>
      {/* <div>
        <Image src={hiring} alt="Hiring" />
      </div> */}
      <div
        id="contact-page-area"
        className="contact-page-area bg-sky pd-top-60 pd-bottom-60 bg-relative"
      >
        {/* <Image
        className="left_image_bounce position-top-right"
        src={One}
        alt="img"
      /> */}
        <div className="container">
          <div className="contact-page-inner">
            <div className="row justify-content-center">
              {/* <div
                className="col-lg-5 pe-xl-5"
                style={{
                  marginTop: "40px",
                }}
              >
                <h6
                  className="sub-title"
                  style={{ color: "orangered", marginTop: "-35px" }}
                >
                  // We are Hiring
                </h6>
                <h2 className="title">Send your resume for Roles below</h2>
                <h4
                  className="title"
                  style={{ color: "#1f508a", marginTop: "20px" }}
                >
                  HR Marketing 0-1 year Experience
                </h4>
                <h4 className="title" style={{ color: "#1f508a" }}>
                  Digital Marketing 0-1 year Experience
                </h4>
                <h4 className="title" style={{ color: "#1f508a" }}>
                  Photoshop premium pro editor 0-3 years Experience
                </h4>
                <div
                  className="col-lg-8 pe-xl-5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "40px",
                    marginLeft: "17%",
                  }}
                >
                  <div className="align-self-center nav-right-part">
                    <p
                      className="btn btn-base"
                      style={{
                        width: "200px",
                        height: "50px",
                        backgroundColor: "black",
                      }}
                    >
                      <Link
                        href="mailto:connect@infosagesolutions.com"
                        style={{
                          color: "white",
                          marginLeft: "-5px",
                        }}
                      >
                        Write an Email
                      </Link>
                    </p>
                  </div> */}

              {/*<div className="single-input-inner style-bg">
                <input type="text" placeholder="Name" />
              </div>
              <div className="single-input-inner style-bg">
                <input type="text" placeholder="Phone" />
              </div>
              <div className="single-input-inner style-bg">
                <input type="text" placeholder="Email" />
              </div>
              <div className="single-input-inner style-bg">
                <textarea placeholder="Message"></textarea>
              </div>
              <div className="btn-wrap">
                <a
                  className="btn btn-black border-radius"
                  onClick={contactSubmit}
                  href="/contact"
                >
                  Send A Message
                </a>
              </div>*/}
              {/* <div style={{ display: "flex", justifyContent: "center" }}>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSd2Z8fkbL48O8RGmcL0oPlWg4pIrVIUUy0Fs2EhAXe1mCvmbA/viewform?embedded=true"
                  width="640"
                  height="1014"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div> */}
              {/* </div>
              </div> */}

              <div className="col-lg-7">
                <div className="section-title mb-0 mt-5 mt-lg-0">
                  <h6 className="sub-title">// Quick Contact</h6>
                  <h2 className="title">Get in Touch With Us</h2>
                  {/* <p className="content">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione
                </p> */}
                  <div className="media single-list-media style-3 mt-4">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="media-left">
                        <Image src={Two} alt="img" />
                      </div>
                    </div>

                    <div className="media-body align-self-center">
                      {/* <p>Write email</p> */}
                      <h4
                        style={{
                          color: "#1f508a",
                          fontSize: "1.3rem",
                        }}
                      >
                        (+91) 939 804 5569
                      </h4>
                    </div>
                  </div>
                  <div className="media single-list-media style-3 mt-4">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="media-left">
                        <Image src={Three} alt="img" />
                      </div>
                    </div>
                    <div className="media-body align-self-center">
                      {/* <p>Write email</p> */}
                      <h4
                        style={{
                          color: "#1f508a",
                          fontSize: "1.11rem",
                        }}
                      >
                        <a href="mailto:connect@infosagesolutions.com">
                          connect@infosagesolutions.com
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="media single-list-media style-3 mt-4 mb-0">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="media-left">
                        <Image src={Four} alt="img" />
                      </div>
                    </div>

                    <div className="media-body align-self-center">
                      {/* <p>Visit anytime</p> */}
                      <a
                        target="_blank"
                        href="https://maps.app.goo.gl/xqgdT8XEGyV6VpY17"
                      >
                        <h4
                          style={{
                            color: "#1f508a",
                            fontSize: "1.3rem",
                          }}
                        >
                          {/* Kamal Nivas, PJR Colony, Madeenaguda,
                        <br /> */}
                          5-239, Hyderabad, Telangana 500049
                        </h4>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-8 pe-xl-5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "40px",
                    marginLeft: "17%",
                  }}
                >
                  <div className="align-self-center nav-right-part">
                    <p
                      className="btn btn-base"
                      style={{
                        width: "200px",
                        height: "50px",
                        backgroundColor: "black",
                      }}
                    >
                      <Link
                        href="mailto:connect@infosagesolutions.com"
                        style={{
                          color: "white",
                          marginLeft: "-5px",
                        }}
                      >
                        Write an Email
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
