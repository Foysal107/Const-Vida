import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

import Home from '../pages/Home/Home';
import Banner from '../Component/Banner/Banner';
import CostaVidaRewards from '../Component/Rewards/Rewards';
import RewardPopup from '../Component/Rewardpopup/RewardPopup';
import Signup from '../pages/SingUpPage/SingUp';
import MenuPage from '../pages/Menu/Menu';
import ContactPage from '../pages/Contact/Contact';
import CostaVidaPromo from '../Component/CostaVidaPromo/CostaVidaPromo';
import CostaVidaSignup from '../Component/ConstaVidaSignup/CostaVidaSignup';




export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path:"/Banner",
            Component:<Banner></Banner>
          },
          {
            path:"/",
            element:<Home></Home>
          },
          {
            path:"/Reward",
            element:<CostaVidaRewards></CostaVidaRewards>,
          },{
            path:"/RewardPopup",
            Component:<RewardPopup></RewardPopup>
          },{
            path:"/singUp",
            element:<Signup></Signup>
          },{
            path:"/Menu",
            element:<MenuPage></MenuPage>
          },{
            path:"/Contact",
            element:<ContactPage></ContactPage>
          },{
            path:"/CostaVidaPromo",
            element:<CostaVidaPromo></CostaVidaPromo>
          },
          {
            path:"/CostaVidaSignup",
            Component:<CostaVidaSignup></CostaVidaSignup>
          }
        ]
    },
]);