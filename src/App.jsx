import React from 'react';
import Navbar from './components/navbar/Navbar';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import Add from './pages/add/Add';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';

import './App.scss';
import Footer from './components/footer/Footer';


function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/my-gigs',
        element: <Gigs />,
      },
      {
        path: '/gigs/:id',
        element: <Gig />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/add',
        element: <Add />,
      },
      {
        path: '/messages/:id',
        element: <Message />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
    ],
  }]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
