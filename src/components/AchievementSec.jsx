import React from "react";
import "../CSS/Achieve.css";

function AchievementSec() {
  return (
    <>
      <div className="achieveSec" id="achievements">
        {/* <hr className="line" /> */}
        <div className="achievementBox">
          <div className="achievement" id="achBox1">
            <div className="achieveTitle">
              <h3 className="achNumber">01</h3>
              <h3>PAT ON THE BACK</h3>
            </div>
            <div className="achContent" >
              Recognized for consistent high performance throughout the year,
              demonstrating strong ownership, reliability, and quality delivery.
              Appreciated for actively supporting teammates, unblocking
              challenges, and contributing positively to team success.
            </div>
          </div>
          <div className="achievement" id="achBox2">
            <div className="achieveTitle">
              <h3 className="achNumber">02</h3>
              <h3>Circle of Excellence</h3>
            </div>
            <div className="achContent">
              Awarded as part of a high-performing team for successfully
              delivering two key projects through strong collaboration and
              execution. Recognized for cross-functional teamwork,
              problem-solving, and collective impact on project outcomes.
            </div>
          </div>
          <div className="achievement" id="achBox3">
            <div className="achieveTitle">
              <h3 className="achNumber" >03</h3>
              <h3>SMART INDIA HACKATHON</h3>
            </div>
            <div className="achContent">
              Developed a functional prototype for an MNREGA attendance system
              using face image detection to enable secure, identity-based worker
              attendance and reduce manual or fraudulent entries. Designed the
              solution to improve accuracy, transparency, and operational
              efficiency in workforce tracking. The project was recognized for
              its innovation, with the team securing a Top 5 position among
              participating teams.
            </div>
          </div>
          <div className="achievement" id="achBox4">
            <div className="achieveTitle">
              <h3 className="achNumber">04</h3>
              <h3> Oracle Cloud Infrastructure 2025 AI Foundations Associate (1Z0-1122-25)</h3>
            </div>
            <div className="achContent">
              Completed the Oracle OCI AI Foundations Associate certification,
              gaining strong foundational knowledge of AI concepts, machine
              learning workflows, and OCI AI services. Developed an
              understanding of building, deploying, and managing AI-driven
              solutions on Oracle Cloud with a focus on scalability, security,
              and responsible AI.
            </div>
          </div>
          <div className="achievement" id="achBox5">
            <div className="achieveTitle">
              <h3 className="achNumber">05</h3>
              <h3>Oracle Data Platform 2025 Associate (1Z0-1195-25)</h3>
            </div>
            <div className="achContent">
              Completed the Oracle Data Platform Associate certification,
              building strong proficiency in data ingestion, integration, and
              analytics across Oracle’s data ecosystem. Gained hands-on
              understanding of designing secure, scalable data pipelines and
              enabling data-driven insights using Oracle Cloud data services.
            </div>
          </div>
        </div>

        <h2 className="achieveHead">
          <span className="myText">MY</span> <br />{" "}
          <span className="tealText"> ACHIEVEMENTS</span>
        </h2>
      </div>
    </>
  );
}

export default AchievementSec;
