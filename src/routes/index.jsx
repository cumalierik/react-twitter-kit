import { createBrowserRouter } from "react-router-dom";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Notifications from "~/pages/notifications";
import "../assets/css/tailwind.css"
import NotFound from "~/pages/not-found";
import MainLayout from "~/layouts/main";
import Profile from "~/pages/profile";
import Messages from "~/pages/messages";
import Bookmarks from "~/pages/bookmarks";
import Lists from "~/pages/lists";


export const routes = createBrowserRouter([
    {
        path: '/',

        element: <MainLayout />,
        children: [
            {
                index: "true",
                element: <Home />
            },
            {
                path: 'explore',

                element: <Explore />
            },
            {
                path: 'notifications',

                element: <Notifications />
            },
            {
                path: 'id',

                element: <Profile />,
            },
            {
                path: 'bookmarks',
                element: <Bookmarks />
            },

            {
                path: 'messages',
                element: <Messages />
            },
            {
                path: 'lists',
                element: <Lists />
            },

            {
                path: '*',

                element: <NotFound />,

            }

        ]

    },

])
export default routes