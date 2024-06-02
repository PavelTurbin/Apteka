import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import Button from "@mui/material/Button";

function Card({ card, cards, setCards, basket, setBasket, user, setUser, addButton }) {
 console.log(card);
  const [cardItem, setCardItem] = useState(cards);

  // const [basket, setBasket] = useState([])
  console.log(card);
async function deleteCard(id) {
  const response = await axiosInstance.delete(`/baskets/${id}`)

  if(response.status === 200) {
    const newBas = basket.filter((el) => el.id !== id)
    setBasket([...newBas])
  } else {
    alert('что-то не так')
  }
}
  async function addCardBasket(user) {
    const responce = await axiosInstance.post('/baskets', {

      drug_id: card.id,
    });
    setBasket((prev) => [...prev, card]);
  }


  return (
    <>
      <div className="card" style={{ width: '18rem', margin: "40px", background: "#e9e9e9", borderRadius: "30px"}}>
        <img src={card?.img} style={{height: "250px", width: "180px", margin: "50px"}} className="img-responsive" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">{card?.name}</h5>
          <p className="card-text">Цена {card?.price}</p>
          <p className="card-text">Цена со скидкой {card?.priceDiscount}</p>
{addButton ?<Button
            variant="text"
            onClick={() => addCardBasket(user)}
          >
            Добавить в корзину
          </Button> : <Button
            variant="text"
            onClick={() => {}}
          >
            Удалить
          </Button> }
          
        </div>
      </div>
    </>
  );
}
export default Card;
