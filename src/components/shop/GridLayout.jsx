import React from "react";
import { Typewriter } from "react-simple-typewriter";
function GridLayout() {
  return (
    <h3 className="display-4 font-weight-bold landing-text fw-light">
      Welcome to the{" "}
      <span className="fw-bold typewriter-text">
        <Typewriter
          words={["Rock Shop", "Market", "Rock Show"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h3>
  );
}

export default GridLayout;
