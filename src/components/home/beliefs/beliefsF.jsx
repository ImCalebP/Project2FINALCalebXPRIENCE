import React from "react"
import Heading from "../../common/Heading"
import "./beliefs.css"
import FeaturedCardF from "./beliefsCardF"

const beliefsF = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='NOS CROYANCES'/>
          <FeaturedCardF />
        </div>
      </section>
    </>
  )
}

export default beliefsF
