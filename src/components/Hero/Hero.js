import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Anton',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'Yale Undergraduate\' 26',
                    2000,
                    'A Full-Stack Developer',
                    2000,   
                    'Interested in Computer Vision',
                    1000, 
                    'Astrophysics Research and Guitar',
                    2000,
                    () => setShowScrollDown(true),
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/me.jpg"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
