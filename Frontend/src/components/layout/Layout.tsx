import React, { useState, Fragment } from "react";
import Head from "next/head";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import Search from "./search/Search";
import HeaderTwo from "./header/HeaderTwo";

type layoutProps = {
  children: React.ReactNode;
  meta: Object;
  header: React.ReactNode;
  footer: React.ReactNode;
  sidebar: React.ReactNode;
  bodyClass: any;
};

const Layout = ({
  children,
  meta,
  header,
  sidebar,
  footer,
  bodyClass,
}: layoutProps) => {
  const Meta = {
    title: "Infosage Solutions",
    ...meta,
  };

  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const closeSearch = () => {
    setSearchToggle(false);
  };

  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />

        <title>{Meta.title}</title>
        <meta
          name="keywords"
          content="IT Staffing, IT outsourcing,Digital Marketing,Data Analytics, Website Designing, Website Redesigning, Brand Promotion, advertise on google ads , advertise with google ads,
          advertise on google adwords,
          google paid search,
          adwords on google,
          google adwords google ads,
          seo and seo,
          digital marketing agencies,
          digital marketing agency,
          marketing agencies,
          agency marketing,
          agency marketing digital,
          marketing agency digital,
          digital agency marketing,
          digital marketing and advertising agency,
          agency for marketing,
          digital marketing ad agency,
          a marketing agency,
          digital marketing and advertising company,
          digital marketing advertising companies,
          marketing agencies,
          digital marketing classes,
          digital marketing agencies,
          courses on digital marketing,
          class digital marketing,
          digital marketing ad agency,
          agencies marketing,
          digital marketing and advertising companies,"
        />
        <meta
          name="description"
          content="IT Services, Branding and Digital Marketing"
        />
      </Head>

      <div
        className={
          (bodyClass === 0
            ? " bg-light2"
            : bodyClass === 1
            ? " bg-light"
            : null) + " app"
        }
      >
        <Search
          handleSearch={handleSearch}
          closeSearch={closeSearch}
          searchToggle={searchToggle}
        />
        {header ? (
          <Header handleSearch={handleSearch} handleSidebar={handleSidebar} />
        ) : (
          <HeaderTwo handleSearch={handleSearch} />
        )}
        {sidebar ? (
          <Sidebar sidebarToggle={sidebarToggle} closeSidebar={closeSidebar} />
        ) : null}
        <main>{children}</main>
        {footer ? <Footer /> : null}
      </div>
    </Fragment>
  );
};

export default Layout;
