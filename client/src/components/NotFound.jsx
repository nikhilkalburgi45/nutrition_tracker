import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="container">
      <div className="not-found">
        <h1>404 | Not Found</h1>
        <p>Go To The <Link to="/register">Regiatreation Page</Link></p>
      </div>
    </section>
  );
};

export default NotFound;
