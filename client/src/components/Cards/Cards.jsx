import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axiosInstance from "../../axiosInstance";

function Cards() {
  const [cards, setCards] = useState([]);

  async function loadCards() {
    const res = await axiosInstance.get("/drugs");
    setCards(res.data);
   
  }
  useEffect(() => {
    loadCards();
  }, []);



  return <div>
    {
        cards.map((card) => {
            return <Card key={card.id}  card={card} cards={cards} setCards={setCards} />;
        })
    }
 
  </div>;
}

export default Cards;