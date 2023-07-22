import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCardF from "./RecentCardF"

const RecentF = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Personnes en charge' subtitle='Dédié a la communauté et Jésus' />
          <RecentCardF />
        </div>
      </section>
    </>
  )
}

export default RecentF
