import './Card.css';

function Card(props){
    return(
        <>
        <div className="card">
            <p className='comment'>{props.comment}</p>
            <div className='profile'>
                <img src={props.img} alt="" />
                <div className='nameDesignation'>
                    <h4>{props.name}</h4>
                    <p>{props.designation}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;