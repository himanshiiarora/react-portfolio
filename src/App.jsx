// import { useState } from 'react'
import './App.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { PortfolioHeader, ExperienceSec, ProjectSec, SkillSec, AchievementSec, ContactSec } from './components'

gsap.registerPlugin(useGSAP);

function App() {

  return (
    <>
      <PortfolioHeader></PortfolioHeader>
      <ExperienceSec></ExperienceSec>
      <SkillSec></SkillSec>
      <AchievementSec></AchievementSec>
      <ContactSec></ContactSec>
    </>
  )
}

export default App
