import React from "react";
import "../CSS/Skill.css";
import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.png";
import sass from "../assets/images/sass.png";
import bootstrap from "../assets/images/bootstrap.jpeg";
import figma from "../assets/images/figma.png";
import gsap from "../assets/images/gsap.png";
import javascript from "../assets/images/javascript.jpeg";
import typescript from "../assets/images/typescript.png";
import react from "../assets/images/react.png";
import angular from "../assets/images/angular.png";
import java from "../assets/images/java.png";
import restassured from "../assets/images/restassured.png";
import gherkin from "../assets/images/gherkin.png";
import appium from "../assets/images/appium.png";
import docker from "../assets/images/docker.png";
import jenkins from "../assets/images/jenkins.png";
import maven from "../assets/images/maven.png";
import linux from "../assets/images/linux.jpeg";
import github from "../assets/images/git.png";
import material from "../assets/images/material.png";
import htmlbg from "../assets/images/htmlbg.jpeg";
import cssbg from "../assets/images/cssbg.jpeg";
import sassbg from "../assets/images/sassbg.jpeg";
import bootstrapbg from "../assets/images/bootstrapbg.jpeg";
import figmabg from "../assets/images/figmabg.jpeg";
import gsapbg from "../assets/images/gsapbg.jpeg";
import javascriptbg from "../assets/images/javascriptbg.jpeg";
import typescriptbg from "../assets/images/typescriptbg.jpeg";
import reactbg from "../assets/images/reactbg.jpeg";
import angularbg from "../assets/images/angularbg.jpeg";
import javabg from "../assets/images/javabg.jpeg";
import restassuredbg from "../assets/images/restassuredbg.jpeg";
import gherkinbg from "../assets/images/gherkinbg.jpeg";
import appiumbg from "../assets/images/appiumbg.jpeg";
import dockerbg from "../assets/images/dockerbg.jpeg";
import jenkinsbg from "../assets/images/jenkinsbg.jpeg";
import mavenbg from "../assets/images/mavenbg.jpeg";
import linuxbg from "../assets/images/linuxbg.jpeg";  
import githubbg from "../assets/images/gitbg.jpeg";
import materialbg from "../assets/images/materialbg.jpeg";

 
function SkillSec() {
  return (
    <>
      <div className="skillSec banner" id="skills">
        <h2 className="skillHead" data-content="What I Do ?">
          What I Do ?
        </h2>
        <div className="slider" style={{ "--quantity": 20 }}>
          <div
            className="infoBox"
            style={{
              "--position": 1,
              "backgroundImage": `url(${htmlbg})`,
            }}
          >
            <img src={html5} className="skillImg" />
            <p className="skillName" >HTML5</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 2,
              backgroundImage: `url(${cssbg})`,
            }}
          >
            <img src={css3} className="skillImg" />
            <p className="skillName">CSS3</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 3,
              backgroundImage: `url(${sassbg})`,
            }}
          >
            <img src={sass} className="skillImg" />
            <p className="skillName">SASS</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 4,
              backgroundImage: `url(${bootstrapbg})`,
            }}
          >
            <img src={bootstrap} className="skillImg" />
            <p className="skillName">Bootstrap</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 5,
              backgroundImage: `url(${figmabg})`,
            }}
          >
            <img src={figma} className="skillImg" />
            <p className="skillName">Figma</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 6,
              backgroundImage: `url(${gsapbg})`,
            }}
          >
            <img src={gsap} className="skillImg" />
            <p className="skillName">GSAP</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 7,
              backgroundImage: `url(${javascriptbg})`,
            }}
          >
          <img src={javascript} className="skillImg" />
            <p className="skillName">JavaScript</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 8,
              backgroundImage: `url(${typescriptbg})`,
            }}
          >
            <img src={typescript} className="skillImg" />
            <p className="skillName">TypeScript</p>
          </div>

          <div
            className="infoBox"
            style={{
              "--position": 9,
              backgroundImage: `url(${reactbg})`,
            }}
          >
            <img src={react} className="skillImg" />
            <p className="skillName">React</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 10,
              backgroundImage: `url(${angularbg})`,
            }}
          >
            <img src={angular} className="skillImg" />
            <p className="skillName">Angular</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 11,
              backgroundImage: `url(${javabg})`,
            }}
          >
            <img src={java} className="skillImg" />
            <p className="skillName">Java</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 12,
              backgroundImage: `url(${restassuredbg})`,
            }}
          >
            <img src={restassured} className="skillImg" />
            <p className="skillName">REST</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 13,
              backgroundImage: `url(${gherkinbg})`,
            }}
          >
            <img src={gherkin} className="skillImg" />
            <p className="skillName">Gherkin</p>
          </div>

          <div
            className="infoBox"
            style={{
              "--position": 14,
              backgroundImage: `url(${appiumbg})`,
            }}
          >
            <img src={appium} className="skillImg" />
            <p className="skillName">Appium</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 15,
              backgroundImage: `url(${dockerbg})`,
            }}
          >
            <img src={docker} className="skillImg" />
            <p className="skillName">Docker</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 16,
              backgroundImage: `url(${jenkinsbg})`,
            }}
          >
            <img src={jenkins} className="skillImg" />
            <p className="skillName">Jenkins</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 17,
              backgroundImage: `url(${mavenbg})`,
            }}
          >
            <img src={maven} className="skillImg" />
            <p className="skillName">Maven</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 18,
              backgroundImage: `url(${linuxbg})`,
            }}
          >
            <img src={linux} className="skillImg" />
            <p className="skillName">Linux</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 19,
              backgroundImage: `url(${githubbg})`,
            }}
          >
            <img src={github} className="skillImg" />
            <p className="skillName">Git</p>
          </div>
          <div
            className="infoBox"
            style={{
              "--position": 20,
              backgroundImage: `url(${materialbg})`,
            }}
          >
            <img src={material} className="skillImg" />
            <p className="skillName">Material UI</p>
          </div>

          
        </div>
        <div className="skillData">
          Software Engineer specializing in frontend development with Angular,
          JavaScript, TypeScript, and React complemented by strong experience in
          backend and API automation. <br />
          Skilled in building scalable, data-driven applications, optimizing
          system performance, and delivering seamless, user-focused solutions.
          <br />
          Strong collaborator with a proven record of optimizing architecture,
          resolving critical issues, and enhancing user experiences.
        </div>
      </div>
    </>
  );
}

export default SkillSec;
