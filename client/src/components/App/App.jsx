import { useEffect, useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from "../Layout";
import axiosInstance, { SetAccessToken } from "../../axiosInstance";
import Cards from '../Cards/Cards';
import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';
import Basket from '../Basket/Basket';



function App() {
  const [user, setUser] = useState(null)

const [basket, setBasket] = useState([])
  useEffect(() => {// или loader route
    axiosInstance.get("/tokens/refresh")  
    .then((data) => {
       const { accessToken, user } = data.data;
       setUser(user);
       SetAccessToken(accessToken);
    })

},[]);

  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Layout user={user} setUser={setUser}/>,
      children: [
        {
          path: "/signup",
          element: <SignUp/>,

        },
        {
          path: "/",
          element: <Cards user={user} setUser={setUser} basket={basket} setBasket={setBasket}/>,
        },
        {
          path: "/signin",
          element: <SignIn user={user} setUser={setUser}/>,
        },
        {
          path: "/basket",
          element: <Basket user={user} setUser={setUser} basket={basket} setBasket={setBasket}/>,
        },
      ],
    }
  ])

  return <RouterProvider router={router} />;
}

export default App
