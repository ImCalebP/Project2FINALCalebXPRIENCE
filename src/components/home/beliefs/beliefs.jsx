import React from "react"
import Heading from "../../common/Heading"
import "./beliefs.css"
import FeaturedCard from "./beliefsCard"

const beliefs = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='OUR BELIEFS'/>
          < FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default beliefs
