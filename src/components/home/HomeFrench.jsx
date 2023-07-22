import React from "react"
import AwardsF from "./ceremony/ceremonyF"
import FeaturedF from "./beliefs/beliefsF"
import HeroF from "./hero/HeroF"
import RecentF from "./recent/RecentF"
import TeamF from "./team/TeamF"

const Home = () => {
  return (
    <>
      <HeroF />
      <FeaturedF />
      <AwardsF />
      <TeamF/>
      <RecentF />
      
      
    </>
  )
}

export default Home
