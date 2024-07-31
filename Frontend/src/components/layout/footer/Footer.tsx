import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [mail, setMail] = useState("");

  const backToTopButtonRef = useRef<HTMLDivElement>(null);
  function sendHandler() {
    setMail("");
  }
  useEffect(() => {
    const backToTopButton = backToTopButtonRef.current;

    if (backToTopButton) {
      const handleScroll = () => {
        backToTopButton.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        backToTopButton.removeEventListener("click", () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
      };
    }
  }, [backToTopButtonRef]);

  return (
    <footer className="footer-area bg-cover">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-6 align-self-center mb-4 mb-lg-0">
              <h2 className="animate-text-footer">
                <span className="waviy ms-2">
                  <span style={{ "--i": 1 } as React.CSSProperties}>L</span>
                  <span
                    className="ms-1"
                    style={{ "--i": 2 } as React.CSSProperties}
                  >
                    e
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 3 } as React.CSSProperties}
                  >
                    t
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 4 } as React.CSSProperties}
                  >
                    &apos;
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 5 } as React.CSSProperties}
                  >
                    s
                  </span>
                  <span
                    className="ms-2"
                    style={{ "--i": 6 } as React.CSSProperties}
                  >
                    C
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 7 } as React.CSSProperties}
                  >
                    o
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 8 } as React.CSSProperties}
                  >
                    n
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 9 } as React.CSSProperties}
                  >
                    n
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 10 } as React.CSSProperties}
                  >
                    e
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 11 } as React.CSSProperties}
                  >
                    c
                  </span>
                  <span
                    className="ms-1"
                    style={{ "--i": 12 } as React.CSSProperties}
                  >
                    t
                  </span>
                </span>
              </h2>

              <p>
                For furthur info & support,{" "}
                <Link href="/contact">Contact Us</Link>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="footer-subscribe">
                <div className="single-input-inner">
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Enter your email"
                    onChange={(event) => setMail(event.target.value)}
                    value={mail}
                  />
                  <a className="btn btn-white" onClick={sendHandler}>
                    Send
                  </a>
                </div>
                <span>We&apos;ll contact you shortly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="widget widget_about pe-xl-4">
              <h4 className="widget-title">Address</h4>
              <div className="details">
                <p>Kamal Nivas, PJR Colony, Madeenaguda,<br/> Hyderabad, Telangana 500049</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">Email</h4>
              <div className="details">
                <p>connect@infosage.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">Phone</h4>
              <div className="details">
                <p>(+91) 939 804 5569</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">Working Hours</h4>
              <div className="details">
                <p>Mon - Saturday: 9 AM - 6 PM Sunday: Closed</p>
              </div>
            </div>
          </div> 
        </div>
      </div> */}
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-4 align-self-center mb-1 mb-lg-0">
              <p>Copyright © 2024 Infosage. All rights reserved.</p>
            </div>
            <div className="col-lg-5 align-self-center text-lg-center mb-3 mb-lg-0">
              <p>Privacy Policy / Terms & Services</p>
            </div>
            <div className="col-lg-3 text-lg-end">
              <ul className="social-media">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/infosagesolutionsit"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                {/* <li>
                  <a className="twitter" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li> */}
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/infosagesolutions?igsh=MTc4MmM1YmI2Ng=="
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    href="https://www.youtube.com/@InfosageSolutions"
                    target="_blank"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    href="https://www.linkedin.com/company/103124409/admin/feed/posts/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="back-to-top" ref={backToTopButtonRef}>
        <span className="back-top">Back to top</span>
      </div>
    </footer>
  );
};

export default Footer;
