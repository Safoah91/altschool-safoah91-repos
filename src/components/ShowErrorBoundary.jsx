
import MiniHero from './MiniHero';
import spaceBg from './../assets/spaceship.png'
import { Link } from 'react-router-dom';
import './../css/errorBoundary.css'

const ShowErrorBoundary = () => {
  const miniHeroHeading = 'Error Boundary'
  const miniHeroPara = 'Error caught by error boundaries'

  return (
    <div className='errorBoundary'>
      <MiniHero miniHeroHeading={miniHeroHeading} miniHeroPara={miniHeroPara} />
      <main>
        <div className="wrapper">
          <h1>Something went wrong</h1>
          <p>Brace yourself till we get the error fixed. <br />
            You may also refresh the page or try agian later.</p>
          <Link to='/'>
            <button>Go to home</button>
          </Link>
          <div>
            <img src={spaceBg} alt="" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default ShowErrorBoundary