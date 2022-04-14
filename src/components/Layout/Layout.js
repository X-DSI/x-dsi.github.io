import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LayoutWrapper, LayoutContent, LayoutContainer } from "./Layout.styled";

const Layout = (props) => {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        <div className="header">
          <Header />
        </div>

        <LayoutContent>{props.children}</LayoutContent>
        {/* {props.children} */}
        <Footer />
      </LayoutContainer>
    </LayoutWrapper>
  );
};

export default Layout;
