import { createBrowserRouter } from "react-router-dom";
import SignIn from "../features/auth/SignIn";
import SignUp from "../features/auth/SignUp";
import MiniDrawer from "../features/drawer/MiniDrawer";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./Error";
import Home from "./Home";
import Logout from "./Logout";
import Profile from "./Profile";
import SendMail from "./SendMail";

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
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);

export default Router;
