import { createBrowserRouter } from "react-router-dom";
import AddPage from "../Page/AddPage/AddPage";
import HomePage from "../Page/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/addpage",
        element: <AddPage/>
    }
])
export default router