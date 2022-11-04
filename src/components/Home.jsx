import React, { useState, useEffect } from 'react'
import './../css/home.css'
import avatar from './../assets/avatar.png'
import axios from 'axios';
import { Link as SmoothLink } from 'react-scroll'
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get('https://api.github.com/users/safoah91/repos')
    const data = res.data
    const repoData = data.map(repo => <div className='repo' key={repo.id}>
      <div className="repo-header">
        <Link to={`/repo/${repo.id}`}>
          <p className='repo-name'>{`${repo.name}`}</p>
        </Link>
        <button className='repo-visibility'>{repo.visibility}</button>
      </div>
      <p className='repo-desc'>{repo.description === null ? 'no description found' : repo.description}</p>
      <p className='repo-lang'><span className='repo-lang-circle'></span>{repo.language}</p>
    </div>)

    setData(repoData)
  }

  useEffect(() => {
    getData()
  }, []);


  return (
    <div className='home'>
      <div className="hero">


        <div className="wrapper content">
          <div className="hero-content">
            <h1>There’s no better way to showcase your projects</h1>
            <p>GitHub is an online software development platform. It's used for storing, tracking, and collaborating on software projects.</p>
            <SmoothLink to='main' smooth={true} duration={500}>
              <button className='showcase-btn'>Showcase</button>
            </SmoothLink>
          </div>
          <div className="avatar-content">
            <img src={avatar} alt="repo avator" />
            <h2 className='fullname'>Anastasia Safoah</h2>
            <p className='profile-name'>Safaoh91</p>
            <p className='title'>Frontend Developer</p>
          </div>
        </div>
      </div>

      <main name='main'>
        <div className="wrapper">
          <header>
            <h1>My Repos</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </header>
          <section className="repos">
            {data}
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home