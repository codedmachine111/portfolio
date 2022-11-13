import "./ProjectCard.scss";
import { Button } from "../Button/Button";

export const ProjectCard = (props) => {
  return (
    <>
      {!props.horz ? (
        <div className="project-card ">
          <img src={props.img} alt="project" id={props.id} />
          <h2>{props.name}</h2>
          <p>{props.desc}</p>
          <div className="btn-holder">
            <a href={`https://github.com/codedmachine111/${props.name}`} target="_blank">
              <Button title="GITHUB" />
            </a>
            <a href={props.link} target="_blank">
              <Button title="DEMO" />
            </a>
          </div>
        </div>
      ) : (
        <div className="project-card-horz">
          <img src={props.img} alt="project" id={props.id} />
          <h2>{props.name}</h2>
          <p>{props.desc}</p>
          <div className="btn-holder">
            <a href={`https://github.com/codedmachine111/${props.name}`} target="_blank">
              <Button title="GITHUB" />
            </a>
            <a href={props.link} target="_blank">
              <Button title="DEMO" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
