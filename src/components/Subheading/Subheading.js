import './Subheading.scss';

export const Subheading = (props) => {

    return(
        <>
            <div className="subheading-container">
              <div className="hz-line"></div>
              <p className="subheading">{props.text}</p>
            </div>
        </>
    )
}