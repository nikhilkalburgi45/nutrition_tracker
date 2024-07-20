import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Track from "./components/Track";
import PrivateRoute from "./components/PrivateRoute";
import { UserContext } from "./contexts/UserContext";
import { useState, useEffect } from "react";

const App = () => {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("nutrify-user"))
  );

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("nutrify-user"));
    if (storedUser) {
      setLoggedUser(storedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protect the track route */}
          <Route path="/track" element={<PrivateRoute element={<Track />} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
