import React, { useLayoutEffect } from "react";
import "../CSS/Contact.css";
import { gsap, SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

function ContactSec() {
  useLayoutEffect(() => {
    document.fonts.ready.then(() => {
      // split elements with the class "split" into words and characters
      const split = SplitText.create(".split", {
        type: "chars, words",
      });

      //  animate the characters in a staggered fashion
      gsap.from(split.chars, {
        // duration: 0.8,
        y: -300, // animate from 100px below
        autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        stagger: 0.1, // 0.05 seconds between each
        rotation: -45,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contactmeSec",
          start: "top 50%", // when container enters viewport
          // end: "top 40%",
          toggleActions: "play reverse play reverse",
          // markers: true //uncomment for debugging
        },
      });

      // 🔑 force recalculation
      ScrollTrigger.refresh();
    });

    //cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="contactmeSec" id="contact">
        <div className="contactContent">
          <div className="section1">
            <div className="connecth2">
              <div className="lets split">LET'S</div>
              <div className="work split"> Work </div>
              <div className="together split"> TOGETHER</div>
            </div>

            <div className="headerContact">
              <div className="siteLinks">
                <p className="headerpara">
                  <img
                    className="headerIcon"
                    src="src\assets\images\contactLogos\linkedin-logo.png"
                    alt="linkedin icon"
                  />
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/himanshi-arora-341b1b220/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
                <p className="headerpara">
                  <img
                    className="headerIcon"
                    src="src\assets\images\contactLogos\github-logo.png"
                    alt="github icon"
                  />
                  <a
                    className="github"
                    href="https://github.com/himanshiiarora"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
                <p className="headerpara">
                  {/* Using a placeholder for the icon */}
                  <img
                    className="headerIcon"
                    src="src\assets\images\contactLogos\codepen-logo.png"
                    alt="codepen icon"
                  />
                  <a
                    className="codepen"
                    href="https://codepen.io/himanshiiarora"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CodePen
                  </a>
                </p>
              </div>
              <div className="getInTouch">
                <p className="headerpara">
                  <img
                    className="headerIcon"
                    src="src\assets\images\contactLogos\mailbox.png"
                    alt="email icon"
                  />
                  <a
                    className="email"
                   href="mailto:himanshiiarorawork@gmail.com">himanshiiarorawork@gmail.com</a>
                </p>
                <p className="headerpara">
                  <img
                    className="headerIcon"
                    src="src\assets\images\contactLogos\phone-call.png"
                    alt="phone icon"
                  />
                  <span>+91 9852618000</span>
                </p>
                <p
                  className="headerpara"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                <img
                  className="headerIcon"
                  src="src\assets\images\contactLogos\arrow-circle-up.png"
                  alt="arrow"
                />
                  <span>Back to Top</span>
                </p>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="me">
              <img
                className="meContactimg"
                src="src\assets\images\LinkedInPhoto.jpg"
                alt="contact img"
              />
            </div>
          </div>
        </div>

        <hr className="footerLine" />
        <div className="footerNote">
          © {new Date().getFullYear()} Himanshi Arora. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default ContactSec;
