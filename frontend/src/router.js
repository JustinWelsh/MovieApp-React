import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Watchlist } from "./pages/Watchlist";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Outlet />
            </>
        ),
        children: [{
            index: true,
            element: <Home />
        },
    {
        path: "/watchlist",
        element: <Watchlist />,
    }]
    }
]) 