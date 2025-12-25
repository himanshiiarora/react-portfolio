import React, { useLayoutEffect, useRef } from "react";
import "../CSS/Experience.css";
import { gsap, Flip, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(Flip, ScrollTrigger);
function ExperienceSec() {


  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const targetRef = useRef(null);
  const hasFlipped = useRef(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        // start: "top 60%",
        // end: "bottom 40%",
        start: "top top",
        end: "end end",
        onEnter: () => flip(),
        onEnterBack: () => unflip()
      });

      function flip() {
        if (hasFlipped.current) return;
        hasFlipped.current = true;

        const state = Flip.getState(boxRef.current);
        targetRef.current.appendChild(boxRef.current);

        Flip.from(state, {
          duration: 1,
          ease: "power2.inOut",
          scale: true
        });
      }

      function unflip() {
        if (!hasFlipped.current) return;
        hasFlipped.current = false;

        const state = Flip.getState(boxRef.current);
        sectionRef.current
          .querySelector(".initial")
          .appendChild(boxRef.current);

        Flip.from(state, {
          duration: 1,
          ease: "power2.inOut",
          scale: true
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <>
      <div className="experienceSec" id="experience">
        <h2 className="experienceHead" style={{color:'#222'}}>
          My <br /> <span className="tealText"> Work Experience</span>
        </h2>

        <div className="experience" ref={sectionRef}>


                  <div className="bdo">
            <div className="orgName">
              <h3 className="orgHead">BDO INDIA, Noida</h3>
              <span className="duration">January 2023 - July 2023</span>
            </div>
            <div className="roleDesc">
              <h4 className="companyRole" >Angular Developer</h4>
              <div className="description">
                Architected scalable Angular platforms for enterprise
                environments, consolidating fragmented data workflows and
                supporting high-volume operational inquiries with sustained
                responsiveness. Enhanced system reliability and delivery
                efficiency by resolving architectural bottlenecks and
                strengthening cross-functional collaboration.
              </div>
            </div>
          </div>
        <div className="container initial">
          <div className="box" ref={boxRef}></div>
        </div>


          <div className="hsbc">
            <div className="orgName">
              <h3 className="orgHead">HSBC, Pune</h3>
              <span className="duration">August 2023 - Present</span>
            </div>
            <div className="roleDesc" style={{boxShadow: '-4px 5px 10px rgba(5, 74, 70, 0.2)'}} >
              <h4 className="companyRole">Software Engineer</h4>
              <div className="description">
                Engineered end-to-end automation across web, mobile, and backend
                ecosystems, fortifying security, elevating CI/CD reliability,
                and eliminating redundancy through advanced Java-Gherkin
                frameworks. Independently orchestrated critical automation
                initiatives, resolving high-severity failures and driving
                organizational innovation with scalable, future-proof solutions.
              </div>
            </div>
          </div>

          <div className="container second">
          <div className="marker" ref={targetRef}></div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ExperienceSec;
