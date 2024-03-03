import "./About.scss";
import { Subheading } from "../../components/Subheading/Subheading";
import { Icons } from "../../components/Icons/Icons";
import anime from "animejs";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref: aboutRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const aboutContent = useRef(null);

  useEffect(() => {
    if (inView && aboutContent.current !== null) {
      anime({
        targets: aboutContent.current.children,
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(20),
        easing: "easeOutQuad",
      });
    }
  });

  return (
    <section className="about-container" ref={aboutRef}>
      <div className="about-content" ref={aboutContent}>
        <Subheading text="About" />
        <h2>
          Who am <span id="diff">I</span>?
        </h2>
        <div className="about-content-text">
          <p>
            A tech enthusiast pursuing bachelors degree in Electronics and
            Communications at KLE Technological University, Hubli.
          </p>
          <p>
            I'm a Full-Stack Developer who prioritizes creating engaging
            frontend experiences. I'm dedicated to learning new technologies and
            improving my skills. My passion lies in software engineering, and
            I'm eager to evolve as a developer.
          </p>
        </div>
      </div>
      <div className="about-content" ref={aboutContent}>
        <Subheading text="Technologies" />
        <h2>
          My top <span id="diff">10</span> technologies
        </h2>
        <div className="technology-icon-container">
          <Icons />
        </div>
      </div>
    </section>
  );
};
