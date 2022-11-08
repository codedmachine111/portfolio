import "./About.scss";
import { Subheading } from "../../components/Subheading/Subheading";
import { Icons } from "../../components/Icons/Icons";

export const About = () => {
  return (
    <section className="about-container">
      
      <div className="about-content">
      <Subheading text="About" />
        <h2>Who am <span id="diff">I</span>?</h2>
        <div className="about-content-text">
          <p>
            A tech enthusiast pursuing bachelors degree in Electronics and
            Communications at KLE Technological University, Hubli.
          </p>
          <p>
            I am a Frontend react developer. I practice Data Structures and
            Algorithms in Java. Enthusiastic about Machine Learning, Artificial
            Intelligence and DevOps.
          </p>
        </div>
      </div>
      <div className="about-content">
      <Subheading text="Technologies" />
      <h2>My top <span id="diff">10</span> technologies</h2>
        <div className="technology-icon-container">
          <Icons />
        </div>
      </div>
    </section>
  );
};
