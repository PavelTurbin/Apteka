import React, { useEffect, useState } from "react";

function Card({card, cards, setCards}) {
    const [cardItem, setCardItem] = useState(cards)
  return (
    <>
    <div className="card" style={{"width": "18rem"}}>
    <img src={card.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{card.name}</h5>
      <p className="card-text">Цена {card.price}</p>
      <p className="card-text">Цена со скидкой {card.priceDiscount}</p>
      <a href="#" className="btn btn-primary">Купить</a>
    </div>
  </div>
  </>
  )
}
//реализовать кнопку КУПИТЬ после создания корзины
export default Card
