import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LayoutWrapper } from "./Layout.styled";

const Layout = (props) => {
  return (
    <LayoutWrapper>
      <Header />
      {props.children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
