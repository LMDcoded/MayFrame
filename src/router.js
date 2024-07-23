import React from 'react'
import { useRoutes } from 'react-router';
import Home from "./Pages/Home/Home";
import Agro from './Pages/Agro/Agro';
import Contact from './Pages/ContactUs/ContactUs'
import Services from './Pages/OurServices/OurServices'
import AboutUs from './Pages/AboutUs/AboutUs';

const Router = () => {
  return useRoutes ([
    {
        path:"/",
        element: <Home/>,
    },

    {
        path:"/Agro",
        element: <Agro/>,
    },
    
    {
        path:"/Contact",
        element: <Contact/>,
    },

    {
    path: "/AboutUs",
    element: <AboutUs/>
  },

  {
    path: "/Services",
    element: <Services/>
  }

  ]

  )
    
}

export default Router