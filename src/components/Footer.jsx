import React from 'react'
import './../css/footer.css'
import { FaGithub, FaTwitter, FaSlack, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="social">
        <ul>
          <li><a target='_blank' rel='noreferrer' href="https://github.com/Safoah91"><FaGithub size={50} /></a></li>
          <li><a target='_blank' rel='noreferrer' href="https://twitter.com/stacylamptey"><FaTwitter size={50} /></a></li>
          <li><a target='_blank' rel='noreferrer' href="https://safoah91.slack.com"><FaSlack size={50} /></a></li>
          <li><a target='_blank' rel='noreferrer' href="https://instagram.com/maame_safoah?igshid=YmMyMTA2M2Y="><FaInstagram size={50} /></a></li>
        </ul>
      </div>
      <div className="separator"></div>
      <div className="copyright">
        <p>Safoah91 @ 2022</p>
      </div>
    </div>
  )
}

export default Footer