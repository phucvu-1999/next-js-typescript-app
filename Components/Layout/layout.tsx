import React from "react";

import MainNavigation from "./main-navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
