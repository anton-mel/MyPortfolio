import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("anton.melnychuk@yale.edu");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">

      <div className="Container">
          <div className="BigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'space-between' }} >
                <span className="link4">anton.melnychuk@yale.edu</span>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow sendb"
                href="mailto:anton.melnychuk3@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
          </div>
       

      </div>
    </ContactWrapper>
  );
}

export default Contact;
