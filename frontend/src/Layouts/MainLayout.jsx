import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/footer";
import Header from "../components/header";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
