import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
// import ContactUs from "./ContactUs";
// import AboutUs from "./AboutUs";
// import Hero from "./Hero";
// import Features from "./Features";
import NavBar from "./NavBar";
import "../../css/rockshowhome.css";
function RockShowHome() {
  return (
    <div>
      <title>Rock Show Home</title>
      <NavBar></NavBar>

      {/* top Section */}
      <div className="vh-100 d-flex align-items-center justify-content-center text-center top-section">
        <div>
          <h1 className="display-4 font-weight-bold landing-text">
            Discover OracleIllusions Rocks & Gems
          </h1>
          <p className="lead my-4 landing-text">
            Step into the world of pristine natural beauty. Shop our collection
            and find your perfect gem today.
          </p>
          <a href="/shop" className="btn btn-primary btn-lg" role="button">
            Browse Shop
          </a>
        </div>
      </div>

      {/* Center Section */}
      <div className="vh-100 d-flex align-items-center justify-content-center text-center middle-section">
        <div>{/* Content for the middle section */}</div>
      </div>

      {/* bottom Section */}
      <div className="vh-100 d-flex align-items-center justify-content-center text-center bottom-section">
        <div>{/* Content for the bottom section */}</div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default RockShowHome;
