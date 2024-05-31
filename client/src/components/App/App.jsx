import { useEffect, useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from "../Layout";
import axiosInstance, { SetAccessToken } from "../../axiosInstance";
import Cards from '../Cards/Cards';
import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';


function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log('Hello');
  });

  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Layout user={user}/>,
      children: [
        {
          path: "/signup",
          element: <SignUp/>,

        },
        {
          path: "/",
          element: <Cards/>,
        },
        {
          path: "/signin",
          element: <SignIn user={user} setUser={setUser}/>,
        },
        // {
        //   path: "/logout",
        //   element: <Logout/>,

        // },
      ],
    }
  ])

  return <RouterProvider router={router} />;
}

export default App
