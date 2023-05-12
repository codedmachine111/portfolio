import "./Projects.scss";
import { Subheading } from "../../components/Subheading/Subheading";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj2.png";
import proj3 from "../../assets/proj3.png";
import proj4 from "../../assets/proj4.png";
import proj5 from "../../assets/proj5.png";
import anime from "animejs";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const { ref: projectContainerRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projectCardsContainer = useRef(null);

  useEffect(() => {
    if (inView && projectCardsContainer.current !== null) {
      anime({
        targets: projectCardsContainer.current.children,
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(20),
        easing: "easeOutQuad",
      });
    }
  });

  return (
    <>
      <section className="projects-container" ref={projectContainerRef}>
        <Subheading text="Projects" />
        <h2>
          My recent <span id="diff">works</span>
        </h2>
        <div className="project-cards-container" ref={projectCardsContainer}>
          <ProjectCard
            img={proj1}
            id="vert"
            name="Pixtory"
            desc="A Full-Stack web application to decribe the story behind a picture."
            link="https://pixtory.vercel.app"
            demo={true}
          />
          <ProjectCard
            img={proj2}
            id="vert"
            name="Musifi"
            desc="A web application for facial emotion based music recommendation."
            link="https://musifi.vercel.app"
            demo={true}
          />
          <ProjectCard
            img={proj3}
            id="vert"
            name="portfolio"
            desc="A personal portfolio website."
            demo={true}
            link="https://akashnayak.netlify.app"
          />
          <ProjectCard
            img={proj4}
            horz={true}
            name="superdrip"
            desc="A web-design for a fully functioning E-commerce website website built using Reactjs with redux and Hooks"
            link="https://superdrip.netlify.app"
            demo={true}
          />
          <ProjectCard
            img={proj5}
            horz={true}
            name="trabebo"
            desc="Web design for a travel company."
            demo={true}
            link="https://trabebo.netlify.app"
          />
        </div>
      </section>
    </>
  );
};
