import "./Projects.scss";
import { Subheading } from "../../components/Subheading/Subheading";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj2.png";
import proj3 from "../../assets/proj3.png";
import proj4 from "../../assets/proj4.png";
import proj5 from "../../assets/proj5.png";

export const Projects = () => {
  return (
    <>
      <section className="projects-container">
        <Subheading text="Projects" />
        <h2>
          My recent <span id="diff">works</span>
        </h2>
        <div className="project-cards-container">
            <ProjectCard img={proj1} id="vert" name="trabebo" desc="A web-design for a travel website built using Reactjs"/>
            <ProjectCard img={proj3} id="vert" name="portfolio" desc="A minimalist web-design for a portfolio website built using Reactjs"/>
            <ProjectCard img={proj5} id="vert" name="blogs" desc="A personal blog website built using Gatsby."/>
            <ProjectCard img={proj2} horz={true} name="superdrip" desc="A web-design for a fully functioning E-commerce website website built using Reactjs with redux and Hooks"/>
            <ProjectCard img={proj4} horz={true} name="sos-pulse" desc="Send an SOS when you are in trouble to an emergency email"/>
        </div>
      </section>
    </>
  );
};
