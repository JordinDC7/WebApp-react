import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
// import ContactUs from "./ContactUs";
// import AboutUs from "./AboutUs";
// import Hero from "./Hero";
// import Features from "./Features";
import NavBar from "./NavBar";
import "../../css/rockshowhome.css";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

function RockShowHome() {
  const navigate = useNavigate();

  const goToShopPage = (e) => {
    navigate(`/RockShop`);
    e.preventDefault();
  };
  return (
    <div>
      <title>Rock Show Home</title>
      <NavBar></NavBar>

      {/* top Section */}
      <div className="vh-100 d-flex align-items-center justify-content-center text-center top-section">
        <div>
          {/* <h1 className="display-4 font-weight-bold landing-text">
            Discover OracleIllusions Rocks & Gems
          </h1> */}
          <h1 className="display-4 font-weight-bold landing-text fw-light">
            Discover OracleIllusions{" "}
            <span className="fw-bold typewriter-text">
              <Typewriter
                words={["Rocks", "Gems", "& More"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={110}
                deleteSpeed={110}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="lead my-4 landing-text">
            Step into the world of pristine natural beauty. Shop our collection
            and find your perfect gem today.
          </p>
          <button onClick={goToShopPage} className="btn btn-primary btn-lg">
            Browse Shop
          </button>
        </div>
      </div>

      {/* Center Section */}
      <div className="vh-100 d-flex align-items-center justify-content-center text-center middle-section">
        <div>{/* Content for the middle section */}</div>
      </div>

      {/* bottom Section */}
      <div className="vh-100 d-flex align-items-center justify-content-center text-center bottom-section main-wrapper">
        <div>{/* Content for the bottom section */}</div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default RockShowHome;
