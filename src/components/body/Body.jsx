import { FaFilePdf, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import './Body.css';

const Body = () => {
  return (
    <div id='hero' className="body">
     <div className="text-container">
          <h1>Hi! I&apos;m <span>Siddhartha Shukla</span></h1>
          <h3>A Frontend Developer</h3>
     </div>
      <div className="button-container">
        {/* <a href="/path-to-your-cv.pdf" target="_blank" className="button">
          <FaFilePdf className="icon" />
          CV
        </a> */}
        <a href="https://github.com/SiddharthaShukla8" target="_blank" className="button">
          <FaGithub className="icon" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/siddhartha-shukla-6a24072a6/" target="_blank" className="button">
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
        <a href="https://leetcode.com/u/siddharthashukla260804/" target="_blank" className="button">
          <FaCode className="icon" />
          LeetCode
        </a>
      </div>
    </div>
  );
}

export default Body;
