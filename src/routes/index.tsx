import { createBrowserRouter } from "react-router-dom";
import SignIn from "../features/auth/SignIn";
import SignUp from "../features/auth/SignUp";
import MiniDrawer from "../features/drawer/MiniDrawer";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./Error";
import Home from "./Home";
import Profile from "./Profile";
import SendMail from "./SendMail";
import Settings from "./Settings";
import SignOut from "./Signout";
import Tracking from "./Tracking";
import Admin from "../features/admin/Admin";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MiniDrawer />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/sendmail",
          element: <SendMail />,
        },
        {
          path: "/contactus",
          element: <Contact />,
        },
        {
          path: "/tracking",
          element: <Tracking />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signout",
          element: <SignOut />,
        },
      ],
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);

export default Router;
