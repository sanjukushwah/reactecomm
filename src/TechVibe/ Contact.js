import React from "react";
import heroImage from "../assets/images/robot.png";
const Contact = () => {
  return (
    <>
      <section class="pt-5 primary-bg">
        <div class="container section-1 bg-2 pt-5 position-relative">
          <div class="row g-5 pt-5">
            <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5 p-r">
              <div class="about-us">
                <h1 class="text-white mb-4 animated slideInRight">
                  Contact Us
                </h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#link">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="#link">Pages</a>
                    </li>
                    <li
                      class="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div class="col-lg-6 col-lg-6 align-self-end text-center text-lg-end">
              <div class="hero-img">
                <img src={heroImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container section-4 contact-page py-5">
          <div class="row py-5  justify-content-center">
            <div class="col-lg-7">
              <div class="section-title text-center">
                <a
                  href="#link"
                  class="btn btn-sm border rounded-pill px-3 mb-3"
                >
                  Contact us
                </a>
                <h2 class="mb-4">
                  If you require further information, please reach out to us.
                </h2>
                <p class="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="contact-form">
                <form action="">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div class="col-md-12">
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div class="col-md-12">
                      <textarea
                        name=""
                        id=""
                        cols="25"
                        rows="3"
                        class="form-control"
                      ></textarea>
                    </div>
                    <div class="text-center">
                      <button class="btn btn-primary btn-lg">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
