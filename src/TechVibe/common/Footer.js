import React from "react";
import logo from "../../assets/images//logo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-dark footer pt-5">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-12">
                <div className="footer-title">
                  <a href="#link">
                    <img src={logo} alt="" />
                  </a>
                  <div>
                    <p className="mb-0">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                      tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                      ipsum et lorem et sit, sed stet no labore lorem sit.
                      Sanctus clita duo justo et tempor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="footer-title">
                  <h3>Get In Touch</h3>
                  <div>
                    <p>
                      <i className="icon-location"></i>
                      123 Street, New York, USA
                    </p>
                    <p>
                      <i className="icon-phone-1"></i>
                      +000 000 00000
                    </p>
                    <p>
                      <i className="icon-mail-alt"></i>
                      info@example.com
                    </p>
                  </div>
                  <div className="d-flex pt-2">
                    <a className="btn  btn-social" href="#link">
                      <i className="icon-facebook"></i>
                    </a>
                    <a className="btn  btn-social" href="#link">
                      <i className="icon-youtube-play"></i>
                    </a>
                    <a className="btn  btn-social" href="#link">
                      <i className="icon-instagram"></i>
                    </a>
                    <a className="btn  btn-social" href="#link">
                      <i className="icon-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="footer-title">
                  <h3>Popular Link</h3>
                  <ul>
                    <li>
                      <a href="link">About Us</a>
                    </li>
                    <li>
                      <a href="link">Contact Us</a>
                    </li>
                    <li>
                      <a href="link">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="link">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="link">Career</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="footer-title">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <a href="#link">Machine Intelligence</a>
                    </li>
                    <li>
                      <a href="#link">Automated Robotics</a>
                    </li>
                    <li>
                      <a href="#link">Forecasting Insights</a>
                    </li>
                    <li>
                      <a href="#link">Information Analytics</a>
                    </li>
                    <li>
                      <a href="#link">Automated Systems</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
