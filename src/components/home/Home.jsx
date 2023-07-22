import React from "react"
import Awards from "./ceremony/ceremony"
import Featured from "./beliefs/beliefs"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"
import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured/>
      <Awards />
      <Team/>
      <Recent />
      
      
    </>
  )
}

export default Home
