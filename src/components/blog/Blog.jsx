import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.png"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Our leaders' title='Commited to Jesus and help community to stand for whats right and evolve together' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog
