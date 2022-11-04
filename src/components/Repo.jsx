import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MiniHero from './MiniHero'
import './../css/singleRepo.css'
import ReactPaginate from 'react-paginate'

const Repo = () => {

  const [offset, setOffset] = useState(0)
  const [data, setData] = useState([]);
  const [perPage] = useState(1);
  const [pageCount, setPageCount] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    const res = await axios.get('https://api.github.com/users/safoah91/repos')
    const data = res.data
    const slice = data.slice(offset, offset + perPage)
    const repoData = slice.map(repo => <div className='repo' key={repo.id}>
      <div className="repo-header">
        <div>
          <a target='_blank' rel='noreferrer' href={repo.html_url}>
            <p className='repo-name'>{`${repo.name}`}</p>
          </a>
          <p className='repo-created_at'>{repo.created_at}</p>
        </div>
        <button className='repo-visibility'>{repo.visibility}</button>
      </div>
      <div className="repo-content">
        <img src={repo.owner.avatar_url} alt="" />
        <p className='repo-login'>{repo.owner.login}</p>
        <p className='repo-desc'>{repo.description === null ? 'no description found' : repo.description}</p>
      </div>
      <div className="repo-footer">
        <p className='repo-lang'><span className='repo-lang-circle'></span>{repo.language}</p>
        <p className='repo-updated_at'>
          <span>Latest Update</span>
          <small>{repo.updated_at}</small>
        </p>
      </div>
    </div>)

    setData(repoData)
    setPageCount(Math.ceil(data.length / perPage))
  }

  const handlePageClick = (e) => {
    const selecttedPage = e.selected;
    setOffset(selecttedPage + 1)
  }

  useEffect(() => {
    getData()
  }, [getData, offset]);

  const miniHeroHeading = `Single Repository`
  const miniHeroPara = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'


  return (
    <div>
      <MiniHero miniHeroHeading={miniHeroHeading} miniHeroPara={miniHeroPara} />
      <div className="single-repo">
        <div className="wrapper">
          {data}
        </div>
        <div className="paginate">
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </div>
  )
}

export default Repo