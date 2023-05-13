import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./Error";
import Home from "./Home";
import Logout from "./Logout";
import Profile from "./Profile";
import SendMail from "./SendMail";
import SignIn from "../features/auth/SignIn";
import SignUp from "../features/auth/SignUp";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="sendmail" element={<SendMail />} />
      <Route path="contactus" element={<Contact />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="profile" element={<Profile />} />
      <Route path="logout" element={<Logout />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRouter;
