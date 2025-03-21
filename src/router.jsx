import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import AddItems from "./pages/AddItems";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/dashboard/inventory",
                element: <Inventory />,
            },
            {
                path: "/dashboard/add-item",
                element: <AddItems />
            }

        ],
    }
])


export default router;