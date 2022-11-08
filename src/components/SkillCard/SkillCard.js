import './SkillCard.scss';

export const SkillCard = (props) => {
    return(
        <>
            <div className='skill-card-container'>
                <h2 className='skill-card-title'>{props.title}</h2>
                <p className='skill-card-desc'>{props.desc}</p>
            </div>
        </>
    )
}