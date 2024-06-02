import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import Cards from '../Cards/Cards';
import axiosInstance from '../../axiosInstance';

function Basket({ user, setUser, card, cards, setCards }) {

const [basket, setBasket] = useState([])

async function newBasket() {
    const res = await axiosInstance.get('/baskets')
    setBasket(res.data)
    console.log(res);
}

  useEffect(() => {
    newBasket()
  }, []);

  return (
    <div style={{ display: 'flex',  justifyContent: 'space-around' }}>
      {user !== null ? (
        <>
          <div>
            {basket.length > 0 && basket?.map((el) => {
              return <Card addButton={false} key={el.id} setBasket={setBasket} card={el.Drug} />;
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Basket;
