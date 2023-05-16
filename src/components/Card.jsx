const Card = (props) => {
    return(
        <div className="card">
        <div>
            <img src='/img/unliked.png' width={32} height={32} alt="Unliked" />
        </div>
        <img width={133} height={112} src={props.pSrc} alt="Sneakers" />
        <h5>{props.pTitle}</h5>
        <div className="cardChildDiv">
            <div className="container">
                <span>Цена:</span>
                <b>{props.pPrice}</b>
            </div>
            <button className="button">
              <img width={32} height={32} src="/img/plus.png" alt="Plus" />
            </button>
        </div>
        </div>
    )
}

export default Card;