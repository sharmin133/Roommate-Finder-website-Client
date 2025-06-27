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




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[

      {index:true, 
      loader: ()=>fetch('https://roommate-finder-website-server.vercel.app/roommates/available'),
      element:<Home></Home>},
      { path:'login', element:<Login></Login> },
      {path:'register', element:<Register></Register>},
      {path:'addRoommate', element:<PrivateRoute><AddRoommate></AddRoommate></PrivateRoute>},
      {
        path:'browsingList',
        loader: ()=>fetch('https://roommate-finder-website-server.vercel.app/roommates'),
         element:<BrowsingList></BrowsingList>
        },
        {
          path:'detailsData/:id',
          loader:({params})=>fetch(`https://roommate-finder-website-server.vercel.app/roommates/${params.id}`),
          element:<DetailsData></DetailsData>

        },

        {
          path: 'myListing',
          element:<PrivateRoute> <UserListing></UserListing></PrivateRoute>
         },
         {
          path:'updateListing/:id',
          loader:({params})=>fetch(`https://roommate-finder-website-server.vercel.app/roommates/${params.id}`),
          element:<UpdateData> </UpdateData>
         },
         {
          path:'bonus',
          element:<BonusCard></BonusCard>
         },
         {
          path:'profile',
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
         },
         {
          path:'aboutUs',
          element:<AboutUs></AboutUs>
         },
         {
          path:"/info/:section",
          element:<FooterInfo></FooterInfo>

         }
        
         
    ]
  },

  {
    path: "*",
    element: <>
    <NotFound></NotFound>
    </>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
<AuthProvider>
   
    <RouterProvider router={router} />
 
 
</AuthProvider>
  </StrictMode>,
)
