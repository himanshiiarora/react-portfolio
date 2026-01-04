import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../CSS/Header.css";
gsap.registerPlugin(ScrollTrigger);

function PortfolioHeader() {
  // Register the ScrollTrigger plugin

  const containerRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const workContentRef = useRef(null);
  const [activeLink, setActiveLink] = useState("landing-page");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigationRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Determine if we are in the landing page (curtains) or home (intro) phase
      // The header is pinned for 150% of viewport height.
      // We set a threshold to switch from 'landing-page' to 'home' as the curtains open.
      const homeThreshold = windowHeight * 0.8; 

      let currentSection = scrollPosition < homeThreshold ? "landing-page" : "home";

      const sections = ["experience", "skills", "achievements", "contact"];
      
      sections.forEach((section) => { 
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          // Trigger slightly before the section hits the top
          if (scrollPosition >= offsetTop - 200) {
            currentSection = section;
          }
        }
      });
      setActiveLink(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // Animation starts when top of container hits top of viewport
          end: "+=100%", // Scroll distance to complete the animation (adjust as needed)
          scrub: true, // Links animation progress to scrollbar
          pin: true, // Pins the container in place during animation
        },
      });

      // Add animations to the timeline
      // The 'start' label ensures all animations happen simultaneously
      tl.to(
        leftCurtainRef.current,
        {
          width: "0%",
          ease: "none", // Linear ease is best for scrubbed animations
        },
        "start"
      )
        .to(
          rightCurtainRef.current,
          {
            width: "0%",
            ease: "none",
          },
          "start"
        )
        .from(
          workContentRef.current,
          {
            y: 100, // Slide up from 100px down (adjust value as needed)
            opacity: 0, // Optional: fade in effect
            scale: 0.95, // Optional: slight zoom in effect
            ease: "none",
          },
          "start"
        );
    },
    { scope: containerRef }
  );

  return (
    <>
      <div
        ref={navigationRef}
        className={`navigation ${activeLink === "landing-page" ? "nav-hidden" : ""}`}
      >
        <div className="nav-links-desktop">
          <a
            className={`navLinks ${activeLink === "home" ? "active" : ""}`}
            href="#home"
          >
            Home
          </a>
          <a
            className={`navLinks ${activeLink === "experience" ? "active" : ""}`}
            href="#experience"
          >
            Work Experience
          </a>
          <a
            className={`navLinks ${activeLink === "skills" ? "active" : ""}`}
            href="#skills"
          >
            Skills
          </a>
          <a
            className={`navLinks ${activeLink === "achievements" ? "active" : ""}`}
            href="#achievements"
          >
            Achievements
          </a>
          <a
            className={`navLinks ${activeLink === "contact" ? "active" : ""}`}
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-links-mobile ${isMenuOpen ? "open" : ""}`}>
          <a
            className={`navLinks ${activeLink === "home" ? "active" : ""}`}
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            className={`navLinks ${activeLink === "experience" ? "active" : ""}`}
            href="#experience"
            onClick={() => setMenuOpen(false)}
          >
            Work Experience
          </a>
          <a
            className={`navLinks ${activeLink === "skills" ? "active" : ""}`}
            href="#skills"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            className={`navLinks ${activeLink === "achievements" ? "active" : ""}`}
            href="#achievements"
            onClick={() => setMenuOpen(false)}
          >
            Achievements
          </a>
          <a
            className={`navLinks ${activeLink === "contact" ? "active" : ""}`}
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
      {/*Main Container (Pinned)*/}
      <div ref={containerRef} className="headerContainer">
        {/* --- PageHeader / Curtains Layer (Z-Index High) --- */}
        <div className="curtainsLayer" id="landing-page">
          {/* Left Curtain (para) */}
          <div ref={leftCurtainRef} className="para">
            {/* Huge Typography for Left Curtain */}
            <h1 className="mainH1">HIMA</h1>
          </div>

          {/* Right Curtain (second half) */}
          <div ref={rightCurtainRef} className="secondHalf">
            {/* Huge Typography for Right Curtain */}
            <h1 className="mainH1 nshiText">NSHI</h1>
          </div>
        </div>

        {/* --- Work Experience Layer (Z-Index Low / Behind) --- */}
        <div ref={workContentRef} className="aboutLayer">
          {/* Your Intro section*/}
          <div className="introSection" id="home">
            {/* Hero Text Section */}
            <div className="introDetails">
              <h2 className="greeting">Hi, I am</h2>

              <h1 className="name">HIMANSHI ARORA</h1>

              <h3 className="designation">FRONT END DEVELOPER</h3>

              <p className="aboutMe">
                I am a Frontend Developer specializing in modern frontend
                development with Angular and performance-driven web
                architectures. Backed by strong experience in automation, API
                design, and cloud fundamentals, I build resilient, scalable
                systems that balance user experience with technical excellence.
                Actively involved in innovation, problem-solving, and
                continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioHeader;
