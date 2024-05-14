import Layout from "../components/Layout/Layout"
import About from "../components/Pages/About"
import Home from "../components/Pages/Home"

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },

        ]
    },
]
export default routes