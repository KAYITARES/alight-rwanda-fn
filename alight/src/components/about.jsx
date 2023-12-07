import React from "react";
import term from "../assets/tmwk.jpeg";
import Buttons from "./button";
function About() {
  return (
    <>
      <div className="about-container">
      <h1 className="heads">Abouts Us</h1>
        <div className="abouts">
          <div className="about-image">
            <img src={term} alt="about" />
          </div>
          <div className="about-text">
            <h1>Who We Are?</h1>
            <p>
              With over two decades of continuous presence in Rwanda, Alight has
              been playing a critical role in helping displaced peoplerebuild
              their lives. Today, Alight Rwanda works in all five refugee camps
              in the country, serving mostlCongolese and Burundian refugees. In
              the past, Alight Rwanda has also supported displaced communities
              in three urban areas and three refugee reception and transit
              centers.Alight Rwanda works closely with key stakeholders
              including the Rwandan Government, U.S Government agencies, and the
              United Nations (UN) to provide core services. humanitarians,
              businesspeople, and institutions .
            </p>
            <h1 className="head">Our Sectors</h1>
            <div className="serv">
            <p>-Education</p>
            <p>-HealthCare</p>
            <p>-Nutrion for refugees</p>
            <p>-prevents violence for families</p>
            </div>
            <Buttons name="Learn more.." className="btn" fontsize = '1.4rem' background = '#2B94A3'/>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
