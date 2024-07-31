import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import hiring from "public/images/contact/hiring.png";
import Link from "next/link";

const about = () => {
  let x = "//";
  return (
    <Layout
      meta="Infosage Solutions"
      header={false}
      sidebar={true}
      footer={true}
      bodyClass={true}
    >
      <div>
        <Image src={hiring} alt="Hiring" />
      </div>
      <div className="container">
        <div className="contact-page-inner">
          <div className="row justify-content-center">
            <div
              className="col-lg-12 pe-xl-5"
              style={{
                marginTop: "40px",
              }}
            >
              <h6
                className="sub-title"
                style={{
                  color: "orangered",
                  marginTop: "-35px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {x} We are Hiring
              </h6>
              <h2
                className="title"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Send your resume for Roles below
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <table>
                  <thead>
                    <tr id="row1">
                      <th>
                        <h4
                          className="title"
                          style={{
                            marginTop: "20px",
                            marginLeft: "15%",
                          }}
                        >
                          Role
                        </h4>
                      </th>
                      <th>
                        <h4
                          className="title"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px",
                          }}
                        >
                          Experience
                        </h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h4
                          className="title"
                          style={{
                            color: "#1f508a",
                            marginTop: "20px",
                          }}
                        >
                          HR Management
                        </h4>
                      </td>
                      <td>
                        <h4
                          className="title"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            color: "#1f508a",
                            marginTop: "25px",
                          }}
                        >
                          0-1 years
                        </h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4
                          className="title"
                          style={{
                            color: "#1f508a",
                            marginTop: "20px",
                          }}
                        >
                          Digital Marketing
                        </h4>
                      </td>
                      <td>
                        <h4
                          className="title"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            color: "#1f508a",
                            marginTop: "25px",
                          }}
                        >
                          0-1 years
                        </h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4
                          className="title"
                          style={{
                            color: "#1f508a",
                            marginTop: "20px",
                          }}
                        >
                          Photoshop Premium pro editor
                        </h4>
                      </td>
                      <td>
                        <h4
                          className="title"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            color: "#1f508a",
                            marginTop: "25px",
                          }}
                        >
                          0-3 years
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="col-lg-12 pe-xl-5"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
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
    </Layout>
  );
};
export default about;
