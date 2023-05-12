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
        <h2>Who am <span id="diff">I</span>?</h2>
        <div className="about-content-text">
          <p>
            A tech enthusiast pursuing bachelors degree in Electronics and
            Communications at KLE Technological University, Hubli.
          </p>
          <p>
            I am a Full-Stack Developer with a strong focus on delivering frontend experiences.
            I am always looking to learn new technologies and improve my skills. I work on DeepLearning projects on the side and a beginner to Tensorflow.
            I plan on building meaningful projects and grow as a developer.
          </p>
        </div>
      </div>
      <div className="about-content" ref={aboutContent}>
      <Subheading text="Technologies" />
      <h2>My top <span id="diff">10</span> technologies</h2>
        <div className="technology-icon-container">
          <Icons />
        </div>
      </div>
    </section>
  );
};
