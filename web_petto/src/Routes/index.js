import Logout from "../Apps/logout";
import Register from "../Apps/register";
import Login from "../Apps/login";
import PrivateRoutes from "../Conponents/privateRoutes";
import LayoutDefault from "../Layout/layoutDefault";
import { Navigate } from "react-router-dom";
import LayoutAdmin from "../Layout/layoutAdmin";
import Home from "../Apps/home";
import DeshBoard from "../Apps/deshboard";
import Doctor from "../Apps/doctor";
import Note from "../Apps/note";
import DetailAnimal from "../Apps/deshboard/detailAnimal";
import Contact from "../Apps/contact";
import Introduce from "../Apps/introduce";
import Blog from "../Apps/blog";
import MiniShop from "../Apps/minishop";
export const Routes = [
    //public
    {
        path:"/",
        element:<LayoutDefault />,
        children :[
            {
                path: "/home",
                element:<Home />
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/introduce",
                element:<Introduce/>
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"/logout",
                element:<Logout/>
            },
            {
                path: "*",
                element:<Navigate to="/home" />
            },
        ],
    },
    //end public
    //private
    {
        element :<PrivateRoutes />,
        children:[
            {
                element:<LayoutAdmin />,
                children:[
                    {
                        path:"/deshboard",
                        element:<DeshBoard/>
                    },
                    {
                        path:"/doctor",
                        element:<Doctor />
                    },
                    {
                        path:"/note",
                        element:<Note />
                    },
                    {
                        path:"/detailAnimal",
                        element:<DetailAnimal />
                    },
                    {
                        path:"/blog",
                        element:<Blog />
                    },
                    {
                        path:"/minishop",
                        element:<MiniShop/>
                    }
                ]
            }
        ]
    }
    //end private
]