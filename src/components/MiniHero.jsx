import React from 'react'

const MiniHero = ({ miniHeroHeading, miniHeroPara }) => {
  return (
    <div className='mini-hero'>
      <div className="wrapper">
        <h1>{miniHeroHeading}</h1>
        <p>{miniHeroPara}</p>
      </div>
    </div>
  )
}

export default MiniHero