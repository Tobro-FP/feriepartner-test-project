import { createBrowserRouter } from "react-router-dom"
import App from '../pages/App'
import NotFound404 from '../pages/NotFound404'
import Employees from '../pages/Employees'
import Employee from '../pages/Employee'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/employees',
        element: <Employees />,
    },
    {
        path: '/employee/:id',
        element: <Employee />,
    },
    {
        path: '*',
        element: <NotFound404 />,
    },
])
