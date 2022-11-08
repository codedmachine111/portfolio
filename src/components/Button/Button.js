import './Button.scss';

export const Button = (props)=>{
    return(
        <>
            <button className='btn' id={props.id}>{props.title}</button>
        </>
    )
}