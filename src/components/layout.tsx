import React from "react";

// const styles = require("./layout.module.css");

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
