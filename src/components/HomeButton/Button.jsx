import './Button.css'

function Button(props) {
    return (
            <button className='btn' style={{backgroundColor:props.BackGroundColor,color:props.color}}>{props.text}</button>
        )
}

export default Button;