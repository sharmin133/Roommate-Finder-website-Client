import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Component/Layout/Root.jsx';
import Home from './Component/Home/Home.jsx';
import NotFound from './Component/Not Found/NotFound.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import AuthProvider from './Component/Context/AuthProvider.jsx';
import AddRoommate from './Component/AddRoommate/AddRoommate.jsx';
import BrowsingList from './Component/BrowsingList/BrowsingList.jsx';
import DetailsData from './Component/DetailsData/DetailsData.jsx';
import UserListing from './Component/UserListing/UserListing.jsx';
import UpdateData from './Component/UpdateData/UpdateData.jsx';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx';
import BonusCard from './Component/BonusCard/BonusCard.jsx';
import Profile from './Component/Profile/Profile.jsx';
import AboutUs from './Component/AboutUs/AboutUs.jsx';
import FooterInfo from './Component/FooterInfo/FooterInfo.jsx';
import DashboardLayout from './Component/Dashboard/overview/DashboardLayout/DashboardLayout.jsx';
import Overview from './Component/Dashboard/overview/Overview.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Root contains Header, Footer, etc.
    children: [
      {
        index: true,
        loader: () => fetch('https://roommate-finder-website-server.vercel.app/roommates/available'),
        element: <Home />,
      },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'addRoommate', element: <PrivateRoute><AddRoommate /></PrivateRoute> },
      {
        path: 'browsingList',
        loader: () => fetch('https://roommate-finder-website-server.vercel.app/roommates'),
        element: <BrowsingList />,
      },
      {
        path: 'detailsData/:id',
        loader: ({ params }) =>
          fetch(`https://roommate-finder-website-server.vercel.app/roommates/${params.id}`),
        element: <DetailsData />,
      },
      {
        path: 'updateListing/:id',
        loader: ({ params }) =>
          fetch(`https://roommate-finder-website-server.vercel.app/roommates/${params.id}`),
        element: <UpdateData />,
      },
      { path: 'bonus', element: <BonusCard /> },
      { path: 'aboutUs', element: <AboutUs /> },
      { path: 'info/:section', element: <FooterInfo /> },

      // 🧩 Dashboard as nested route inside Root layout
      {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
          { index: true, element: <Overview /> },
          { path: 'profile', element: <Profile /> },
          { path: 'myListing', element: <UserListing /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
