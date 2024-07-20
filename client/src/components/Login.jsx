import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext"; // Use default import

const Login = () => {
  const { loggedUser, setLoggedUser } = useContext(UserContext); // Destructure context

  const navigate = useNavigate();
  const [userCreds, setUserCreds] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({
    type: "invisible-msg",
    text: "",
  });

  // Handle input change and update user credentials state
  const handleInput = (event) => {
    setUserCreds((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userCreds);

    try {
      // Send a POST request to the login endpoint
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(userCreds),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Handle different status codes
      if (response.status === 404) {
        setMessage({ type: "error", text: "Username or Email Doesn't Exist" });
      } else if (response.status === 403) {
        setMessage({ type: "error", text: "Incorrect Password" });
      } else if (!response.ok) {
        setMessage({ type: "error", text: "Login failed. Please try again." });
      } else {
        // Parse the JSON response
        const data = await response.json();

        // Handle success
        if (data.token) {
          setMessage({ type: "success", text: "Login successful!" });
          console.log(data);

          // Store the token in localStorage
          localStorage.setItem("nutrify-user", JSON.stringify(data));

          setLoggedUser(data);

          // Redirect to the track page
          navigate("/track");
        }
      }

      // Hide the message after 5 seconds
      setTimeout(() => {
        setMessage({ type: "invisible-msg", text: "" });
      }, 5000);
    } catch (err) {
      console.log(err);
      setMessage({ type: "error", text: "Login failed. Please try again." });
    }
  };

  return (
    <section className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login To Fitness</h1>

        <input
          className="inp"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={handleInput}
          value={userCreds.email}
          required
        />
        <input
          className="inp"
          type="password"
          placeholder="Enter Your Password"
          name="password"
          onChange={handleInput}
          value={userCreds.password}
          maxLength={8}
          required
        />

        <button className="btn">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register Now</Link>
        </p>
        <p className={message.type}>{message.text}</p>
      </form>
    </section>
  );
};

export default Login;
