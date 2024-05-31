import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axiosInstance from "../../axiosInstance";

function Cards({basket, setBasket, user, setUser}) {
  const [cards, setCards] = useState([]);

  async function loadCards() {
    const res = await axiosInstance.get("/drugs");
    setCards(res.data);
  }
  useEffect(() => {
    loadCards();
  }, []);



  return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
    {
        cards.map((card) => {
            return <Card addButton={true} key={card.id} user={user} setUser={setUser} basket={basket} setBasket={setBasket} card={card} cards={cards} setCards={setCards} />;
        })
    }
 
  </div>;
}

export default Cards;