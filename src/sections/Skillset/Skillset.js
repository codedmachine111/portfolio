import './Skillset.scss';
import {Subheading} from '../../components/Subheading/Subheading';
import { SkillCard } from '../../components/SkillCard/SkillCard';

export const Skillset = () => {
    return(
        <>
            <section className='skillset-container'>
                <Subheading text='Skillset' />
                <h2>My <span id='diff'>skills</span></h2>
                <div className='skillset-cards-container'>
                    <SkillCard title="Frontend Development" desc="Developing a frontend website using React with context or redux, graphQL, Hooks. CLean code and good practices"/>
                    <SkillCard title="DSA in Java" desc="Data Structures and Algorithms in Java. Problem solving skill and logic building."/>
                </div>
            </section>
        </>
    )
}