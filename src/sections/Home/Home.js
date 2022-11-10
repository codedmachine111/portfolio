import "./Home.scss";
import { Button } from "../../components/Button/Button";
import profile from "../../assets/cropped.jpg";
import { Subheading } from "../../components/Subheading/Subheading";

export const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="info-container">
          <div className="info-details-container">
            <Subheading text="introduction" />
            <div className="title-container">
              <h1>Hello!</h1>
              <h1>I am <span id="diff">Akash</span></h1>
            </div>
            <div className="description-container">
              <p>Frontend React developer. I build amazing projects, learn quick, play around and explore different technologies. Get in touch with me and I will be happy to offer my services.</p>
              </div>            
              <Button title="GITHUB" />
          </div>
          <div className="info-image-container">
            <div className="info-image-holder">
            <img src={profile} alt=""/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
