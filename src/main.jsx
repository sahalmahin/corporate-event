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
import Error from './components/Error/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:
      [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/donation",
          element: <Donation></Donation>,
          loader: () => fetch('../donation.json')
        },
        {
          path: "/donate/:id",
          element: <DonateDetails></DonateDetails>,
          loader: () => fetch('../donation.json')
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        }
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
