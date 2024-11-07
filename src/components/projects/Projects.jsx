import Project from "../project/Project"; // Assuming Project component is in the correct path
import "./Projects.css";
import image1 from "../../assets/Screenshot 2024-11-07 at 11.27.13 PM.png";
import image2 from "../../assets/Screenshot 2024-11-07 at 11.26.58 PM.png";
import image3 from "../../assets/Screenshot 2024-11-07 at 11.26.41 PM.png";
// import image4 from "../../assets/Screenshot 2024-05-21 at 19.53.29.png";
// import image5 from "../../assets/Screenshot 2024-05-21 at 21.16.44.png";

function Projects() {
  const arrOfProjects = [
    {
      image: image1,
      title: "Google Calender Web app",
      description: "Developed a Google Calendar clone focused on seamless event creation, scheduling, reminders, and real-time updates for enhanced user experience.",
      codeLink: "https://github.com/SiddharthaShukla8/Google-Calendar-S",
      siteLink: "https://google-calendar-s.vercel.app/",
    },
    {
      image: image2,
      title: "Booking Web App",
      description: "Developed a fully functional Booking.com clone replicating core features for a smooth user experience in accommodation search and booking.",
      codeLink: "https://github.com/SiddharthaShukla8/Endsem-Project---Booking.com---Endsem-Project-Booking.com---rf8itr8e06ck",
      siteLink: "https://bookingcomclone.vercel.app/",
    },
    {
      image: image3,
      title: "Quiz Web app",
      description: "Developed an interactive Quiz App with a user-friendly interface for taking quizzes and displaying results.",
      codeLink: "https://github.com/SiddharthaShukla8/quizapp",
      siteLink: "https://quizapp-eight-gray.vercel.app/",
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
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
