import { createBrowserRouter } from 'react-router-dom'
import Explore from '../pages/explore'
import Home from '../pages/home'
import Notification from '../pages/notification'
import NotFound from '../not-found'
import MainLayout from '../layout/main'
import Profile from '../pages/profile'
import Lists from '../pages/lists'
import Messages from '../pages/messages'
import Community from '../pages/community'
import Premium from '../pages/Premium'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/explore',
                element: <Explore />
            },
            {
                path: '/notification',
                element: <Notification />
            },
            {
                path: ':slug',
                element: <Profile />
            },
            {
                path: "list",
                element: <Lists />
            },
            {
                path: "message",
                element: <Messages />

            },
            {
                path: "communities",
                element: <Community />

            },
            {
                path: "premium",
                element: <Premium />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }

])


export default routes