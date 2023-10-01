import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="BigCard">
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeIn">
            Hi! I am an undergraduate student at Yale University from Ukraine. I am majoring in Computer Science with a Computer Vision track, as well as taking Data Science and Japanese Certificates. My coursework is built on core CS, operating systems (CPSC 323), artificial intelligence, proof-based algorithms (CPSC 365), databases design. Beyond software development, I am takign Research Methods in Astrophysics (PHYS 295), which invloved Python computational manipulation of digitized images and spectra from telescopes. I am also part of <a className="link2" target="_blank" href="https://science.yalecollege.yale.edu/stem-fellowships/funding-stem-opportunities-yale/stars"> Technology & Research Scholars (STARS)</a> at Yale, and intend to do research in asteroseismology with Computer Vision algorithms the following semester.

            </ScrollAnimation>

            <br />
            
            <ScrollAnimation animateIn="fadeIn">
            This wouldn't have been possible without <a target="_blank" className="link" href="https://www.ugs.foundation/">Ukraine Global Scholars 501(c)(3)</a>—a non-profit that assists selected students in applying to US schools. I have been selected as as top‐70 promising students in Ukraine in 2021.
            </ScrollAnimation>
            
            <br />
            
            <ScrollAnimation animateIn="fadeIn">
              <div className="tagline2">
                During my software development advanture, I have become confident using the following technologies:
              </div>
              <br />
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeIn" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
                
            <ScrollAnimation className="mt" animateIn="fadeIn">
              Now as I eagerly anticipate my internship, I am motivated by a strong desire not only to learn but also to actively contribute to the development of the impactful projects, fully immerse myself in the daily life of the company, and foster a deeper connection within its members.
              <br/><br/>
              <b>Anton Melnychuk</b>
            </ScrollAnimation>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
