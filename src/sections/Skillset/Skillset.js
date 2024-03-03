import "./Skillset.scss";
import { Subheading } from "../../components/Subheading/Subheading";
import { SkillCard } from "../../components/SkillCard/SkillCard";
import anime from "animejs";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Skillset = () => {
  const { ref: skillsetRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillsetContainer = useRef(null);

  useEffect(() => {
    if (inView && skillsetContainer.current !== null) {
      anime({
        targets: skillsetContainer.current.children,
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
      <section className="skillset-container" ref={skillsetRef}>
        <Subheading text="Skillset" />
        <h2>
          My <span id="diff">skills</span>
        </h2>
        <div className="skillset-cards-container" ref={skillsetContainer}>
          <SkillCard
            title="Frontend Web Development"
            desc="Creating stunning user interfaces while developing a good frontend website using React with technologies like context or redux, and Hooks. Implementing clean code and best practices to ensure the good quality in the final product."
          />
          <SkillCard
            title="Full-Stack Web Development"
            desc="Skilled in building full-stack web application using Node.js, Express, React and MySQL. Experience in designing and developing RESTful APIs and integrating them with the frontend."
          />
          <SkillCard
            title="ML/DL"
            desc="Experience with Machine Learning and Deep Learning projects, utilizing tools like TensorFlow and popular ML libraries like scikit-learn. Additionally, conducted research on Generative AI, specifically exploring text-to-image generation using advance techniques."
          />
          <SkillCard
            title="DSA in C++"
            desc="Data Structures and Algorithms in C++. Problem solving skill and logic building."
          />
        </div>
      </section>
    </>
  );
};
