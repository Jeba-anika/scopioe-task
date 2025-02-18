import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Login from '../pages/Login';
import Register from "../pages/Register";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])

export default routes