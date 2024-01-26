import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RockShowHome() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-brand">Rock Show</button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <button className="nav-link">Features</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">About</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome to the Rock Show Website</h1>
          <p className="lead">
            Large component for calling extra attention to featured content or
            information.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="mb-4">Features</h2>
          <p>Details about features of website/product.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">About Us</h2>
          <p>About Us place holder</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="mb-4">Contact Us</h2>
          <p>Contact information placeholder.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>© 2024 Rock Show</p>
        </div>
      </footer>
    </div>
  );
}

export default RockShowHome;
