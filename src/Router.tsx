import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import CheckTicket from './pages/CheckTicket'
import Home from './pages/Home'
import ManageTicket from './pages/ManageTicket'
import Setting from './pages/Setting'

const Router = () => {
  const routing = useRoutes([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'ManageTicket',
                element:<ManageTicket></ManageTicket>
            },
            {
                path: 'CheckTicket',
                element:<CheckTicket></CheckTicket>
            },
            {
                path: 'Setting',
                element:<Setting></Setting>
            }
            
        ]
    }])
    return routing

}

export default Router