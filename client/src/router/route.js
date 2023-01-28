

import Home from "../components/pages/Home/Home";
import Detail from "../components/pages/Detail/Detail";
import Wishlist from "../components/pages/Wishlist/Wishlist";
import Add from "../components/pages/Add/Add";
import MainRoot from "../components/pages/MainRoot";

export const ROUTE=[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'add',
                element:<Add/>
            },
            {
                path:'detail/:id',
                element:<Detail/>
            },
            {
                path:'wishlist',
                element:<Wishlist/>
            },
        ]
    }
]