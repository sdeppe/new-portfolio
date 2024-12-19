import React from "react";
import "./About.css";
import profileImg from "../../assets/img/Shawn_Profile_copy.jpeg"; // Ensure the image exists in this path

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image">
              <img
                src={profileImg}
                alt="Profile of Shawn Deppe" // Added meaningful alt text
                className="rounded-image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Hi, I'm Shawn Deppe, a passionate Software Engineer with a focus on
                web and application development. I enjoy learning new technologies
                and applying them to create meaningful solutions.
              </p>
              <p>
                With experience in modern web frameworks and tools, I aim to build
                innovative applications that enhance user experiences. In my free time,
                I explore new programming languages and contribute to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
