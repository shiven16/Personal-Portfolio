import Project from "../project/Project";
import "./Projects.css";
import image1 from "../../assets/Screenshot 2024-11-12 at 4.14.59 PM.png";
import image2 from "../../assets/Screenshot 2024-11-12 at 4.36.51 PM.png";
import image3 from "../../assets/Screenshot 2024-11-12 at 4.48.09 PM.png";

function Projects() {
  const arrOfProjects = [
    {
      image: image2,
      title: "Code Assist",
      description: "Developed Code Assist, an AI-powered tool enabling secure code uploads with Firebase authentication, offering bug fixing, refactoring, ESLint formatting, and customizable comments for readability.",
      codeLink: "https://github.com/shiven16/Code-Assist",
      siteLink: "https://code-assist-six.vercel.app/",
    },
    {
      image: image1,
      title: "Slot Sync",
      description: "Developed Slot Sync, a secure booking system with JWT-based authentication, role-based access, calendar management, real-time scheduling, and automated email confirmations for streamlined appointments.",
      codeLink: "https://github.com/shiven16/Slot-Sync-backend",
      siteLink: "https://github.com/shiven16/Slot-Sync-backend",
    },
    {
      image: image3,
      title: "Trip Craft",
      description: "Created an intelligent trip planner utilizing OpenAI API to customize travel itineraries based on user preferences for destination, duration, budget, and themes.",
      codeLink: "https://github.com/shiven16/Gen-AI-trip-planner---Gen---AI-workshop---tp86cpmxhhvk",
      siteLink: "https://gen-ai-trip-planner-gen-ai-workshop-tp86cpmxhhvk.vercel.app/",
      customClass: "trip-craft-image",
    },

    
  ];

  return (
    <div id="projects" className="main">
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        {arrOfProjects.map((project, index) => (
          <Project
            key={index}
            imageUrl={project.image}
            title={project.title}
            description={project.description}
            codeLink={project.codeLink}
            siteLink={project.siteLink}
            customClass={project.customClass}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
