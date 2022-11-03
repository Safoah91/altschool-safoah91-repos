import './../css/pageNotFound.css'
import globe from './../assets/globe.png';
import bg404 from './../assets/404.png';

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <div className="wrapper">
        <img src={bg404} alt="404 bg" />
        <p>Sorry! The page you’re looking for cannot be found.</p>
        <button>Go to home</button>
        <img className='globe' src={globe} alt="" />
        <img className='globe2' src={globe} alt="" />
        <img className='globe3' src={globe} alt="" />
        <img className='globe4' src={globe} alt="" />
      </div>
    </div>
  )
}

export default PageNotFound