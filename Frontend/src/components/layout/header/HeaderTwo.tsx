import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.png";
import searchImage from "public/images/search.png";

const HeaderTwo = ({ handleSearch }: any) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-open" : "";
  };

  return (
    <nav className="navbar navbar-area navbar-expand-lg">
      <div className="container nav-container navbar-bg">
        <div className="responsive-mobile-menu">
          <button
            className={
              (toggleMenu ? " open" : " ") +
              " menu toggle-btn d-block d-lg-none"
            }
            data-target="#itech_main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            <span className="icon-left"></span>
            <span className="icon-right"></span>
          </button>
        </div>
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Image" priority />
          </Link>
        </div>

        <div
          className={
            (toggleMenu ? " sopen" : " ") + " collapse navbar-collapse"
          }
          id="itech_main_menu"
        >
          <ul className="navbar-nav menu-open text-lg-end">
            {/* <li className="menu-item-has-children">
              <a onClick={() => handleSubmenu("home")}>Home</a>
              <ul className={`sub-menu ${isSubMenuOpen("home")}`}>
                <li>
                  <Link href="/">Home 01</Link>
                </li>
                <li>
                  <Link href="/index-two">Home 02</Link>
                </li>
              </ul>
            </li> */}
            {/* <li className="menu-item-has-children">
              <a onClick={() => handleSubmenu("service")}>Service</a>
              <ul className={`sub-menu ${isSubMenuOpen("service")}`}>
                <li>
                  <Link href="/service">Service</Link>
                </li>
                <li>
                  <Link href="/service-details">Service Single</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a onClick={() => handleSubmenu("pages")}>Pages</a>
              <ul className={`sub-menu ${isSubMenuOpen("pages")}`}>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
                <li>
                  <Link href="/team-details">Team Details</Link>
                </li>
                <li>
                  <Link href="/case-study">Case Study</Link>
                </li>
                <li>
                  <Link href="/case-study-details">Case Study Details</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/error">404</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a onClick={() => handleSubmenu("blog")}>Blog</a>
              <ul className={`sub-menu ${isSubMenuOpen("blog")}`}>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/blog-details">Blog Details</Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link
                href="/insights"
                style={{ fontWeight: "bolder", fontSize: "1rem" }}
              >
                INSIGHTS
              </Link>
            </li>
            <li>
              {/*className="menu-item-has-children"*/}
              <Link
                href="/service"
                style={{ fontWeight: "bolder", fontSize: "1rem" }}
              >
                SERVICES
              </Link>
            </li>
            <li className="menu-item-has-children">
              <a
                href="#"
                onClick={() => handleSubmenu("expertise")}
                style={{ fontSize: "1rem" }}
              >
                EXPERTISE
              </a>
              <ul className={`sub-menu ${isSubMenuOpen("expertise")}`}>
                <li>
                  <Link href="/blogs/it-staffing">STAFFING | RECRUITING</Link>
                </li>
                <li>
                  <Link href="/blogs/it-marketing">
                    DIGITAL MARKETING - HOSPITALS | DOCTORS
                  </Link>
                </li>
                <li>
                  <Link href="/blogs/it-pharma">
                    DIGITAL MARKETING - PHARMACEUTICALS | WELLNESS
                  </Link>
                </li>
                <li>
                  <Link href="/blogs/it-analytics">DATA ANALYTICS</Link>
                </li>
              </ul>
              {/* <Link href="/service" style={{ fontWeight: "bolder" }}>
                SERVICES
              </Link> */}
            </li>
            {/* <li>
              <Link href="#" style={{fontWeight:"bolder"}}>CAREERS</Link>
            </li> */}
            <li>
              <Link
                href="/whyUs"
                style={{ fontWeight: "bolder", fontSize: "1rem" }}
              >
                WHY US
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                style={{ fontWeight: "bolder", fontSize: "1rem" }}
              >
                CAREERS
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                style={{ fontWeight: "bolder", fontSize: "1rem" }}
              >
                ABOUT US
              </Link>
            </li>
            {/* <li>
              <Link href="/contact">Contact Us</Link>
            </li> */}
          </ul>
          <div className="align-self-center nav-right-part">
            <p className="btn btn-base" style={{ width: "150px" }}>
              <Link
                href={"/contact"}
                style={{
                  color: "white",
                  marginLeft: "-45px",
                  marginRight: "-45px",
                }}
              >
                Get In Touch
              </Link>
            </p>
          </div>
        </div>
        {/* <div className="nav-right-part nav-right-part-desktop align-self-center">
            <a className="search-bar-btn" onClick={handleSearch}>
            <Image src={searchImage} alt="Image" />
          </a>  
          <p className="btn btn-base">
            <Link href={"/contact"} style={{color:"white"}}>Get In Touch</Link>
          </p>
        </div> */}
      </div>
    </nav>
  );
};

export default HeaderTwo;
