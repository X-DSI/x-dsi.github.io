import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LayoutWrapper, LayoutContent } from "./Layout.styled";

const Layout = (props) => {
  return (
    <LayoutWrapper>
      <div className="header">
        <Header />
      </div>
      
      <LayoutContent>{props.children}</LayoutContent>
      {/* {props.children} */}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
