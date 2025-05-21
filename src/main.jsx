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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[

      {index:true, element:<Home></Home>},
      { path:'login', element:<Login></Login> },
      {path:'register', element:<Register></Register>},
      {path:'addRoommate', element:<AddRoommate></AddRoommate>},
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
