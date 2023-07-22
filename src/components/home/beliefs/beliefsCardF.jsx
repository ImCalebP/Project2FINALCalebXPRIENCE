import React from "react"
import { beliefsF } from "../../data/DataF"

const beliefsCardF = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {beliefsF.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default beliefsCardF
