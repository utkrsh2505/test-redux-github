import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
          gap: "6rem",
          textDecoration: "none",
          border: "1px solid black",
          fontSize: "30px",
          padding: "10px",
          color: "green",
          backgroundColor: "grey"
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/Search">Search</Link>
        <Link to="/Login">Login</Link>
      </div>
    </>
  );
};
export { Navbar };
