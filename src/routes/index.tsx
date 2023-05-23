import { createBrowserRouter } from "react-router-dom";
import Admin from "../features/admin/Admin";
import UserTypesList from "../features/admin/users/UserTypesList";
import UsersList from "../features/admin/users/UsersList";
import SignIn from "../features/auth/SignIn";
import SignUp from "../features/auth/SignUp";
import MiniDrawer from "../features/drawer/MiniDrawer";
import Profile from "../features/profile/Profile";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./Error";
import Home from "./Home";
import SendMail from "./SendMail";
import Settings from "./Settings";
import SignOut from "./Signout";
import Tracking from "./Tracking";

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
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/admin/users",
          element: <UsersList />,
        },
        {
          path: "/admin/usertypes",
          element: <UserTypesList />,
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
