import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  const [message, setMessage] = useState({
    type: "invisible-msg",
    text: "",
  });

  // Handle input change and update user details state
  const handleInput = (event) => {
    setUserDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the registration endpoint
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Parse the JSON response
      const data = await response.json();

      // Update the message state with success message
      setMessage({ type: "success", text: data.message });

      // Reset the user details state
      setUserDetails({
        name: "",
        email: "",
        password: "",
        age: "",
      });

      // Hide the message after 5 seconds
      setTimeout(() => {
        setMessage({ type: "invisible-msg", text: "" });
      }, 5000);
    } catch (err) {
      console.log(err);

      // Update the message state with error message
      setMessage({
        type: "error",
        text: "Registration failed. Please try again.",
      });
    }
  };

  return (
    <section className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Start Your Fitness Tracking</h1>

        <input
          className="inp"
          type="text"
          onChange={handleInput}
          placeholder="Enter Your Name"
          value={userDetails.name}
          required
          name="name"
        />
        <input
          className="inp"
          type="email"
          onChange={handleInput}
          placeholder="Enter Your email"
          value={userDetails.email}
          required
          name="email"
        />
        <input
          className="inp"
          type="password"
          onChange={handleInput}
          placeholder="Enter Your Password"
          value={userDetails.password}
          required
          // maxLength={8}
          name="password"
        />
        <input
          className="inp"
          type="number"
          onChange={handleInput}
          placeholder="Enter Your age"
          value={userDetails.age}
          required
          max={100}
          min={12}
          name="age"
        />

        <button className="btn">Register</button>
        <p>
          Already Registered? Then <Link to="/login">Login</Link>
        </p>
        <p className={message.type}>{message.text}</p>
      </form>
    </section>
  );
};

export default Register;
