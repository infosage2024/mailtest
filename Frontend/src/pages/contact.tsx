import React from "react";
import Layout from "@/components/layout/Layout";
import ContactBanner from "@/components/container/contact/ContactBanner";
import ContactForm from "@/components/container/contact/ContactForm";
import ContactClient from "@/components/container/contact/ContactClient";
import ContactInstagram from "@/components/container/contact/ContactInstagram";
import MyForm from "./MyForm";

const Contact = () => {
  return (
    <Layout
      meta="Attax - Tax Advisor React Template"
      header={false}
      sidebar={true}
      footer={false}
      bodyClass={true}
    >
      {/* <ContactBanner /> */}
      {/* <ContactForm /> */}
      {/* <ContactClient />
      <ContactInstagram /> */}
      <MyForm />
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
      <span style={{ display: "none" }}>
        Developed by Ashish
        <br />
        polusaiashish8364@gmail.com
        <br />
      </span>
    </Layout>
  );
};

export default Contact;
