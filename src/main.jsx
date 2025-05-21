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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[

      {index:true, 
      loader: ()=>fetch('http://localhost:3000/roommates'),
      element:<Home></Home>},
      { path:'login', element:<Login></Login> },
      {path:'register', element:<Register></Register>},
      {path:'addRoommate', element:<AddRoommate></AddRoommate>},
      {
        path:'browsingList',
        loader: ()=>fetch('http://localhost:3000/roommates'),
         element:<BrowsingList></BrowsingList>
        },
        {
          path:'detailsData/:_id',
          loader:({params})=>fetch(`http://localhost:3000/roommates/${params._id}`),
          element:<DetailsData></DetailsData>

        },

        {
  path: 'myListing',
  element: <UserListing></UserListing>
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
