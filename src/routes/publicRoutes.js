import { lazy } from "react"
import Error404Page from "../components/response/Error404Page.jsx"

const Landing = lazy(() => import("../components/landing/RockShowHome.jsx"))


const routes = [
    {
      path: "/",
      name: "Landing",
      exact: true,
      element: Landing,
      roles: [],
      isAnonymous: true,
    },
];
const errorRoutes = [
    {
      path: "*",
      element: Error404Page
    }
  ];
    var allRoutes = [...routes, ...errorRoutes]

    export default allRoutes;