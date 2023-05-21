import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import User from "../../models/users/User";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    const storedToken = localStorage.getItem("jwt");
    if (storedToken) {
      const decodedToken = jwtDecode<User>(storedToken);
      setCurrentUser(decodedToken);
    }
  }, []);

  return currentUser;
};

export default useCurrentUser;
