import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url.length > 0 &&
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                }
                {list.demo_url.length > 0 &&
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                }
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
      <ScrollAnimation animateIn="fadeIn">
        <div className="ProjectWrapper" id="projects">
          <div className="Container">
          In fact, I am also a guitar player and have a small YouTube channel where I occasionally post performances and arrangements. Feel free to take a <a className="link2" href="https://www.youtube.com/embed/1WgWeCgFUMQ?si=vcNTrjG0y4a97Onp&amp;start=52">look at some of them.</a>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}

export default ProjectCard;
