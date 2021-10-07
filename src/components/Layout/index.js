import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

const Layout = ({ children, inViewInfo }) => {
  return (
    //div style for sticky footer
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar inViewInfo={inViewInfo} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
