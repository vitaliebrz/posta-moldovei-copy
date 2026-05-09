import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courier from "./pages/Courier";
import QA from "./pages/QA";
export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/courier",
                element: <Courier />
            },
            {
                path: "/qa",
                element: <QA />
            }
        ]
    }
    
])