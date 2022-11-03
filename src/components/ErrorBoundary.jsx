import React from 'react'
import MiniHero from './MiniHero'

const ErrorBoundary = () => {
  const miniHeroHeading = 'Error Boundary'
  const miniHeroPara = 'Details of a single repository'
  return (
    <div>
      <MiniHero miniHeroHeading={miniHeroHeading} miniHeroPara={miniHeroPara} />
    </div>
  )
}

export default ErrorBoundary