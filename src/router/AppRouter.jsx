import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Stories from "../pages/Stories/Stories";
import Videos from "../pages/Videos/Videos";
import Categories from "../pages/Categories/Categories";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "stories",
                element: <Stories />,
            },
            {
                path: "videos",
                element: <Videos />,
            },
            {
                path: "categories",
                element: <Categories />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

export default router;