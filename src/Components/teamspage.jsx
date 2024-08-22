import React, { useEffect } from "react";
import "./teamsPage.css";
import { finalYear } from "../Assets/finalYear";
import { thirdYear } from "../Assets/thirdYear.js";
import { secondYear } from "../Assets/secondYear.js";

const GridLayout = ({ members }) => {
  return (
    <div className="grid-container">
      {members.map((member, index) => (
        <div key={index} className="grid-item animate-card">
          <div className="card">
            <div className="card-content">
              <img className="card-image" src={member.url} alt={member.name} />
              <div className="card-overlay">
                <h3 className="card-name">{member.name}</h3>
                <p className="card-designation">{member.position}</p>
                <div className="social-icons">
                  <a
                    href={member.instaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href={member.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TeamsPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("left-to-right")) {
            entry.target.classList.add("animate-left");
          } else if (entry.target.classList.contains("right-to-left")) {
            entry.target.classList.add("animate-right");
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="teams-page animate-loading">
      <h1 className="teams-heading">Our Team</h1>

      <section className="section left-to-right">
        <h2 className="sub-heading">Office Bearers</h2>
        <hr className="section-divider" />
        <GridLayout members={finalYear} />
      </section>

      <section className="section right-to-left">
        <h2 className="sub-heading">Senior Coordinators</h2>
        <hr className="section-divider" />
        <GridLayout members={thirdYear} />
      </section>

      <section className="section left-to-right">
        <h2 className="sub-heading">Junior Coordinators</h2>
        <hr className="section-divider" />
        <GridLayout members={secondYear} />
      </section>
    </div>
  );
};

export default TeamsPage;
