import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import DonateDetails from './components/DonateDetails/DonateDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:
      [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/donation",
          element: <Donation></Donation>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "/donate/:id",
          element: <DonateDetails></DonateDetails>,
          loader: () => fetch('../donation.json')
        },
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
