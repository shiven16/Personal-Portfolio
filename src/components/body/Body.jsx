import { FaGithub, FaLinkedin, FaCode, FaFileAlt } from 'react-icons/fa';
import './Body.css';

const Body = () => {
  return (
    <div id='hero' className="body">
     <div className="text-container">
          <h1>Hi! I'm <span>Shiven Ahuja</span></h1>
          <h3>A Frontend Developer</h3>
     </div>
      <div className="button-container">
        <a href="https://github.com/shiven16" target="_blank" className="button">
          <FaGithub className="icon" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/shiven-ahuja-13238427b/" target="_blank" className="button">
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
        <a href="https://drive.google.com/file/d/1IHYbUihLG9wnQiRb24MDn9ODcgPHo7OR/view?usp=sharing" target="_blank" className="button">
          <FaFileAlt className="icon" />
          Resume
        </a>
        <a href="https://codeforces.com/profile/shiven_16" target="_blank" className="button">
          <FaCode className="icon" />
          Codeforces
        </a>
        
      </div>
    </div>
  );
}

export default Body;
