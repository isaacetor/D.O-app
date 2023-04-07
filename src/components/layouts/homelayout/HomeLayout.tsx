import React from "react";
import { Footer, Header } from "../../blocks";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <div style={{ width: "100vw", height: "75px" }}>
        <Header />
      </div>
      <div style={{ width: "100vw" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
