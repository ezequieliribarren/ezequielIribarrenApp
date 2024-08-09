import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.scss'
import Root from './Routes/Root';
import Proyectos from './Routes/Proyectos';
import Servicios from './Routes/Servicios';
import Contacto from './Routes/Contacto';




const router = createHashRouter([


  {
    path: "/",
    element: (
      <Root />
    ),
  },

  {
    path: "/proyectos",
    element: (
      <Proyectos />
    ),
  },

  {
    path: "/servicios",
    element: (
      <Servicios />
    ),
  },

  {
    path: "/contacto",
    element: (
      <Contacto />
    ),
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
