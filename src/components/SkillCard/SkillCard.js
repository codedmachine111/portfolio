import './SkillCard.scss';

export const SkillCard = (props) => {
    return(
        <>
            <div className='skill-card-container'>
                <h2 className='skill-card-title'>{props.title}</h2>
                <p className='skill-card-desc'>{props.desc}</p>
                {/* <p className='skill-card-skills'>
                    <span>Technologies:</span>
                </p> */}
            </div>
        </>
    )
}