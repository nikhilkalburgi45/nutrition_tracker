import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const PrivateRoute = ({ element }) => {
  const { loggedUser } = useContext(UserContext);

  return loggedUser ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
