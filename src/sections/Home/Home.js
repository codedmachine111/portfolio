import "./Home.scss";
import { Button } from "../../components/Button/Button";
import profile from "../../assets/profile.jpg";
import { Subheading } from "../../components/Subheading/Subheading";
import anime from "animejs";
import { useEffect, useRef } from "react";

export const Home = () => {
  const infoContainer = useRef(null);

  useEffect(() => {
    if (infoContainer.current) {
      anime({
        targets: infoContainer.current.children,
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 1000,
        delay: anime.stagger(100),
      });
    }
  }, []);

  return (
    <>
      <section className="home-section">
        <div className="info-container" ref={infoContainer}>
          <div className="info-details-container">
            <Subheading text="introduction" />
            <div className="title-container">
              <h1>Hello!</h1>
              <h1>
                I am <span id="diff">Akash</span>
              </h1>
            </div>
            <div className="description-container">
              <p>
                A Frontend developer who loves crafting fantastic projects.
                I'm quick to learn, enjoy exploring various technologies, and
                always up for experimenting. Reach out to me, and I'd be
                delighted to assist you with my services.
              </p>
            </div>
            <a
              href="https://github.com/codedmachine111"
              target="_blank"
              rel="noreferrer"
            >
              <Button title="GITHUB" />
            </a>
          </div>
          <div className="info-image-container">
            <div className="info-image-holder">
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
