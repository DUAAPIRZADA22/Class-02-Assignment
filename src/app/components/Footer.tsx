import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-section'>
        <h1>Core Courses</h1>
        <ul>
          <li><p>Programming Fundamentals</p></li>
          <li><p>Web2 Using NextJS</p></li>
          <li><p>Earn as You Learn</p></li>
        </ul>
      </div>
      <div className='footer-section'>
        <h1>Advanced Courses</h1>
        <ul>
          <li><p>Web 3 and Metaverse</p></li>
          <li><p>Cloud-Native Computing</p></li>
          <li><p>Artificial Intelligence (AI) and Deep Learning</p></li>
          <li><p>Ambient Computing and IoT</p></li>
          <li><p>Genomics and Bioinformatics</p></li>
          <li><p>Network Programmability And Automation</p></li>
        </ul>
      </div>
      <div className='footer-section'>
        <div className="social-links">
  <h1>Social Links</h1>
  <div className="social-icons">
    <li>
      <Link href="https://www.facebook.com/TeamKTessori" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998' }} />
      </Link>
    </li>
    <li>
      <Link href="https://www.instagram.com/KamranTessoriPk" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C' }} />
      </Link>
    </li>
    <li>
      <Link href="https://www.youtube.com/@KamranTessorikk" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000' }} />
      </Link>
    </li>
  </div>
</div>
      </div>
    </div>
  )
}

export default Footer;
