import './ProjectCard.scss';

export const ProjectCard = (props) => {
    return(
        <>
        {!props.horz ? (
            <div className="project-card">
            <div className="project-card-image">
                <img src={props.img} alt="project" id={props.id}/>
            </div>
        </div>
        ): (
            <div className="project-card-horz">
            <div className="project-card-image">
                <img src={props.img} alt="project" id={props.id}/>
            </div>
        </div>
        )}
            
        </>
    )
}