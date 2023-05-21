import { Route, Routes } from "react-router-dom";
import SignIn from "../features/auth/SignIn";
import SignUp from "../features/auth/SignUp";
import useCurrentUser from "../helpers/customHooks/useCurrentUser";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./Error";
import Home from "./Home";
import Profile from "./Profile";
import SendMail from "./SendMail";
import Settings from "./Settings";
import Signout from "./Signout";
import Tracking from "./Tracking";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

const MainRouter = () => {
  const currentUser = useCurrentUser();
  const isAuthenticated = currentUser?.isSignedIn;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactus" element={<Contact />} />
      <Route path="sendmail" element={<SendMail />} />
      <Route path="tracking" element={<Tracking />} />
      {isAuthenticated ? (
        <>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="signout" element={<Signout />} />
        </>
      ) : (
        <Route path="*" element={<AuthRoutes />} />
      )}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRouter;
